const {
    createShowtimeService,
    getShowtimesService,
    updateShowtimeService,
} = require('../services/showtime.service');

const getShowtimes = async (req, res) => {
    try {
        const showtimes = await getShowtimesService();
        res.status(200).json(showtimes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const postCreateShowtime = async (req, res) => {
    try {
        const { film_id,
            branch_id,
            screen_id,
            start_time,
            duration, } = req.body;
        const newShowtime = await createShowtimeService({
            film_id,
            branch_id,
            screen_id,
            start_time,
            duration,
        });
        res.status(201).json(newShowtime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putUpdateShowtime = async (req, res) => {
    try {
        const { id } = req.params;
        const { film_id,
            branch_id,
            screen_id,
            start_time,
            duration,
            is_active } = req.body;
        const updatedShowtime = await updateShowtimeService(id, {
            film_id,
            branch_id,
            screen_id,
            start_time,
            duration,
            is_active,
        });
        res.status(200).json(updatedShowtime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getShowtimes, postCreateShowtime, putUpdateShowtime };