import { PlaceSuggestion } from '../models/suggestion';
import { Suggestions } from '../suggestions/suggestionData';
module.exports = function (app, db) {
    app.post('/place/different', (req, res) => {
        console.log('body', req.body);
        let suggestion: PlaceSuggestion = Suggestions[1];
        console.log('suggestion', suggestion);
        res.send(suggestion);
    });
    app.post('/place/similar', (req, res) => {
        console.log('body', req.body);
        let suggestion: PlaceSuggestion = Suggestions[0];
        console.log('suggestion', suggestion);
        res.send(suggestion);
    });
}; 