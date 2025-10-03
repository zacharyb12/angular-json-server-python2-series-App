import { LotrCharacter } from "./lotr-character.model";

export interface LotrCharacterResponse {
    docs: LotrCharacter[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}