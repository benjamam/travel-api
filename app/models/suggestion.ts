export class PlaceSuggestion {
    fullName: string;
    city: string;
    coordinates: Coordinates;
}

class Coordinates {
    lattitude: number;
    longitude: number;
}