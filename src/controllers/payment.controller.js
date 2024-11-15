const {
  createPaymentService,
  getPaymentsService,
  updatePaymentService,
  getPaymentByShowTimeIdService,
} = require("../services/payment.service");
const { checkShowtimeExist } = require("../services/showtime.service");

const getPayments = async (req, res) => {
  try {
    const payments = await getPaymentsService();
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postCreatePayment = async (req, res) => {
  try {
    const { userId } = req.user;
    req.body.user_id = userId;
    const newPayment = await createPaymentService(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const putUpdatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPayment = await updatePaymentService(id, req.body);
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPaymentByShowTimeId = async (req, res) => {
  try {
    const { show_time_id } = req.params;
    await checkShowtimeExist(show_time_id);
    const payments = await getPaymentByShowTimeIdService(show_time_id);
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPayments,
  postCreatePayment,
  putUpdatePayment,
  getPaymentByShowTimeId,
};
