document.addEventListener('DOMContentLoaded', () => {
    const increaseButton = document.getElementById('increase-text-size');
    const decreaseButton = document.getElementById('decrease-text-size');
    let currentSize = 16; // Tamaño inicial en px

    increaseButton.addEventListener('click', () => {
        currentSize += 2;
        document.body.style.fontSize = `${currentSize}px`;
    });

    decreaseButton.addEventListener('click', () => {
        currentSize = Math.max(12, currentSize - 2); // Tamaño mínimo en px
        document.body.style.fontSize = `${currentSize}px`;
    });
});