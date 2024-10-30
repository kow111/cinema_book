const {
    createDiscountService,
    getDiscountsService,
    updateDiscountService,
} = require('../services/discount.service');

const getDiscounts = async (req, res) => {
    try {
        const discounts = await getDiscountsService();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const postCreateDiscount = async (req, res) => {
    try {
        const newDiscount = await createDiscountService(req.body);
        res.status(201).json(newDiscount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putUpdateDiscount = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDiscount = await updateDiscountService(id, req.body);
        res.status(200).json(updatedDiscount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getDiscounts, postCreateDiscount, putUpdateDiscount };