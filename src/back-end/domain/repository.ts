import { Card } from "./card";

export interface CardRepository { 
    getById(id: string): Promise<Card>
    create(card: Card): Promise<Card>
    update(card: Card): Promise<Card>
}