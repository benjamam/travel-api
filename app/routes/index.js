const travelRoutes = require('./travel_routes.ts');

module.exports = function (app, db) {
    travelRoutes(app, db);
}