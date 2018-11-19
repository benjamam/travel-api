"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, db) {
    app.post('/place', (req, res) => {
        console.log('body', req.body);
        let suggestion = {
            fullName: 'Cleveland, OH, USA',
            city: 'Cleveland',
            coordinates: {
                lattitude: 41.49932,
                longitude: -81.6943605
            }
        };
        console.log('suggestion', suggestion);
        res.send(suggestion);
    });
};
//# sourceMappingURL=travel_routes.js.map