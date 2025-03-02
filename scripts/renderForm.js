import { Value } from "./models/value.js";
import { Suit } from "./models/suit.js";
import { findPositionInOrder } from "./order.js";

export function renderCardSelector() {
    let selector = document.getElementById('selectCard');
    let html = ``;
    Object.values(Suit).forEach(suit => {
        Object.values(Value).forEach(value => {
            html += `<option value=${findPositionInOrder(value, suit)}>${value.pip + suit.pip}</option>`;
        });
    });
    selector.innerHTML = html;
}

export const renderPositionSelector = () => {
    let selector = document.getElementById('selectPosition');
    let html = ``;
    for (let i = 1; i <= 52; i++) {
        html += `<option value=${i}>${i}</option>`;
    }
    selector.innerHTML = html;
}