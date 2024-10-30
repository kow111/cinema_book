const {
    createFilmService,
    getFilmsService,
    updateFilmService,
} = require('../services/film.service');

const getFilms = async (req, res) => {
    try {
        const films = await getFilmsService();
        res.status(200).json(films);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const postCreateFilm = async (req, res) => {
    try {
        const newFilm = await createFilmService(req.body);
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putUpdateFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFilm = await updateFilmService(id, req.body);
        res.status(200).json(updatedFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getFilms, postCreateFilm, putUpdateFilm };