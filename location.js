let currentPosition = 0;

function moveSlider(direction) {
    const slider = document.querySelector('.atoll-list');
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth + 20; // Including gap

    currentPosition += direction;

    // Prevent overflow (if already at the beginning or the end)
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition >= totalItems - 1) {
        currentPosition = totalItems - 1;
    }

    // Smoothly move the slider
    slider.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
}