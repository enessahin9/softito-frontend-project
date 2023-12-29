import { Card } from "./card";

export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
}

export interface UserWithCardDto extends User {
    cards: Card[]
}