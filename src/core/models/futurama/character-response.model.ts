export interface FuturamaCharacterResponse {
    name: Name;
    images: Images;
    gender : string;
    species : string;
    homePlanet : string;
    occupation : string;
    sayings : string[];
    id : number;
    age : string;
}

export interface Name {
    first: string;
    middle: string;
    last: string;
}

export interface Images {
    headShot: string;
    main: string;
}

