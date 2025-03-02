import { Value } from "./models/value.js";
import { Suit } from "./models/suit.js";

// The order of the deck from top to bottom
export const Order = [
    { value: Value.ace, suit: Suit.spades },
    { value: Value.two, suit: Suit.diamonds },
    { value: Value.seven, suit: Suit.spades },
    { value: Value.queen, suit: Suit.spades },
    { value: Value.seven, suit: Suit.diamonds },
    { value: Value.king, suit: Suit.clubs },
    { value: Value.seven, suit: Suit.hearts },
    { value: Value.eight, suit: Suit.spades },
    { value: Value.queen, suit: Suit.hearts },
    { value: Value.jack, suit: Suit.diamonds },
    { value: Value.three, suit: Suit.spades },
    { value: Value.three, suit: Suit.hearts },
    { value: Value.five, suit: Suit.clubs },
    { value: Value.king, suit: Suit.hearts },
    { value: Value.nine, suit: Suit.clubs },
    { value: Value.two, suit: Suit.spades },
    { value: Value.eight, suit: Suit.clubs },
    { value: Value.three, suit: Suit.diamonds },
    { value: Value.two, suit: Suit.hearts },
    { value: Value.four, suit: Suit.hearts },
    { value: Value.ten, suit: Suit.diamonds },
    { value: Value.jack, suit: Suit.spades },
    { value: Value.six, suit: Suit.clubs },
    { value: Value.ten, suit: Suit.hearts },
    { value: Value.four, suit: Suit.clubs },
    { value: Value.ace, suit: Suit.clubs },
    { value: Value.ten, suit: Suit.spades },
    { value: Value.six, suit: Suit.spades },
    { value: Value.jack, suit: Suit.hearts },
    { value: Value.six, suit: Suit.diamonds },
    { value: Value.five, suit: Suit.spades },
    { value: Value.six, suit: Suit.hearts },
    { value: Value.nine, suit: Suit.hearts },
    { value: Value.eight, suit: Suit.hearts },
    { value: Value.queen, suit: Suit.clubs },
    { value: Value.five, suit: Suit.diamonds },
    { value: Value.five, suit: Suit.hearts },
    { value: Value.ace, suit: Suit.hearts },
    { value: Value.queen, suit: Suit.diamonds },
    { value: Value.king, suit: Suit.diamonds },
    { value: Value.nine, suit: Suit.spades },
    { value: Value.king, suit: Suit.spades },
    { value: Value.nine, suit: Suit.diamonds },
    { value: Value.ten, suit: Suit.clubs },
    { value: Value.four, suit: Suit.spades },
    { value: Value.seven, suit: Suit.clubs },
    { value: Value.four, suit: Suit.diamonds },
    { value: Value.jack, suit: Suit.clubs },
    { value: Value.two, suit: Suit.clubs },
    { value: Value.ace, suit: Suit.diamonds },
    { value: Value.eight, suit: Suit.diamonds },
    { value: Value.three, suit: Suit.clubs },
]

export function findPositionInOrder(value, suit) {
    for (let i = 0; i < Order.length; i++) {
        if (Order[i].value === value && Order[i].suit === suit) {
            return i+1;
        }
    }
}