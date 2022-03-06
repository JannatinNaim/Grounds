let theta = Math.PI / 3;
let newTheta = 0;
let newX = 0;
let newY = 0;
let wheelRadius = 250;

const cards = document.querySelectorAll(".card");

const center = {
    x: parseFloat(getComputedStyle(cards[0]).left),
    y: parseFloat(getComputedStyle(cards[0]).top),
};

cards.forEach((card, index) => {
    newTheta = theta * index;
    newX = Math.cos(newTheta) * wheelRadius;
    newY = Math.sin(newTheta) * wheelRadius;

    card.style.left = center.x + newX + "px";
    card.style.top = center.y + -1 * newY + "px";
});
