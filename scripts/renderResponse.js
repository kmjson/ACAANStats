import { Order, findPositionInOrder } from "./order.js";

export function renderResponse() {
    const selectedCardPosition = document.getElementById('selectCard').value;
    const selectedPosition = document.getElementById('selectPosition').value;
    const responseText = document.getElementById('responseText');
    const responsePercentage = document.getElementById('responsePercentage');

    console.log(selectedCardPosition);
    console.log(selectedPosition);

    responseText.innerHTML = "The probability of the " + 
        getCard(selectedCardPosition) + 
        " and Position " +  
        selectedPosition + 
        " being named together is";

    responsePercentage.innerHTML = calculate(selectedCardPosition, selectedPosition);
}

function getCard(selectedCardPosition) {
    let card = Order.at(selectedCardPosition - 1);
    return card.value.text + " of " + card.suit.text; 
}

function calculate(selectedCardPosition, selectedPosition) {
    let card;
    if (selectedCardPosition >= selectedPosition) {
        let diff = selectedCardPosition - selectedPosition;
        card = Order.at(diff);
    } else {
        let diff = selectedPosition - selectedCardPosition;
        card = Order.at(52 - diff);
    }
    return '0.' + card.value.code + card.suit.code + "%";
}