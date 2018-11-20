export class PlaceSuggestion {
    fullName: string;
    city: string;
    cityDescription: string;
    infoLink: string;
    coordinates: Coordinates;
}

class Coordinates {
    lattitude: number;
    longitude: number;
}