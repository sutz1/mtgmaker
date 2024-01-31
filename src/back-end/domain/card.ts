import { Entity } from "./entity";

export interface UnmarshalledCard {
    id?: string,
    cardName: string,
    manaCost: string,
    cardType: string,
    description: string,
    strength: string,
    toughness: string,
    manaType: string
}

export class Card extends Entity<UnmarshalledCard> {
    private constructor(props: UnmarshalledCard) {
        const { id, ...data } = props;
        super(data, id);
    }

    public static create(props: UnmarshalledCard): Card {
        const instance = new Card(props)
        return instance;
    }

    public unmarshal(): UnmarshalledCard {
        return {
           id: this.id,
           cardName: this.cardName,
           manaCost: this.manaCost,
           cardType: this.cardType,
           description: this.description,
           strength: this.strength,
           toughness: this.toughness,
           manaType: this.manaType
        }
    }

    get id(): string {
        return this._id;
    }

    get cardName(): string {
        return this.props.cardName;
    }

    get manaCost(): string {
        return this.props.manaCost;
    }

    get cardType(): string {
        return this.props.cardType;
    }

    get description(): string {
        return this.props.description;
    }

    get strength(): string {
        return this.props.strength;
    }

    get toughness(): string {
        return this.props.strength;
    }

    get manaType(): string {
        return this.props.manaType;
    }
}