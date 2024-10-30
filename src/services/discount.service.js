const Discount = require('../models/discount.model');

const createDiscountService = async (discount) => {
    try {
        return await Discount.create(discount);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateDiscountService = async (id, discount) => {
    try {
        return await Discount.findByIdAndUpdate(id, discount, {
            new: true,
            runValidators: true,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

const getDiscountsService = async () => {
    try {
        return await Discount.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createDiscountService,
    updateDiscountService,
    getDiscountsService,
};