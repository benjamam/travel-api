const travelRoutes = require('./travel_routes');

module.exports = function (app, db) {
    travelRoutes(app, db);
}