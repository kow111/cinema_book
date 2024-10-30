const Payment = require('../models/payment.model');

const createPaymentService = async (payment) => {
    try {
        return await Payment.create(payment);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updatePaymentService = async (id, payment) => {
    try {
        return await Payment.findByIdAndUpdate(id, payment, {
            new: true,
            runValidators: true,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

const getPaymentsService = async () => {
    try {
        return await Payment.find()
            // .populate('user_id')
            .populate('show_time_id');
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createPaymentService,
    updatePaymentService,
    getPaymentsService,
};