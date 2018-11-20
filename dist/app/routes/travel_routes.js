"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suggestionData_1 = require("../suggestions/suggestionData");
module.exports = function (app, db) {
    app.post('/place/different', (req, res) => {
        console.log('body', req.body);
        let suggestion = suggestionData_1.Suggestions[1];
        console.log('suggestion', suggestion);
        res.send(suggestion);
    });
    app.post('/place/similar', (req, res) => {
        console.log('body', req.body);
        let suggestion = suggestionData_1.Suggestions[0];
        console.log('suggestion', suggestion);
        res.send(suggestion);
    });
};
//# sourceMappingURL=travel_routes.js.map