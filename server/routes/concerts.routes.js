const ConcertController = require('../controllers/concert.controller');

module.exports = (app) => {
    app.post('/api/concerts/create', ConcertController.createConcert);
    app.get('/api/concerts/:id', ConcertController.findOneConcert);
    app.get('/api/home', ConcertController.findAllConcerts);
    app.put('/api/concerts/update/:id', ConcertController.updateOneConcert);
    app.delete('/api/concerts/:id', ConcertController.deleteConcert)
}



