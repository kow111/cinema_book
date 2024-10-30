const Showtime = require('../models/showtime.model');

const createShowtimeService = async (showtime) => {
    try {
        return await Showtime.create(showtime);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateShowtimeService = async (id, showtime) => {
    try {
        return await Showtime.findByIdAndUpdate(id, showtime, {
            new: true,
            runValidators: true,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

const getShowtimesService = async () => {
    try {
        return await Showtime.find()
            .populate('film_id')
            .populate('branch_id');
            // .populate('screen_id');
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createShowtimeService,
    updateShowtimeService,
    getShowtimesService,
};