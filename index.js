import { renderCardSelector, renderPositionSelector } from "./scripts/renderForm.js";
import { renderResponse } from "./scripts/renderResponse.js";

// Page Components
const request = document.getElementById('request');
const response = document.getElementById('response');
const requestForm = document.getElementById('requestForm');
const responseForm = document.getElementById('response');

// Render
renderCardSelector();
renderPositionSelector();

// Submit Form
requestForm.addEventListener('submit', function(event) {
    request.classList = ["off"];
    response.classList = ["on"];

    event.preventDefault();
    renderResponse();
});

// Retry
responseForm.addEventListener('submit', function(event) {
    request.classList = ["on"];
    response.classList = ["off"];

    event.preventDefault();
});