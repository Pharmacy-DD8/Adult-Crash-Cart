document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const slideInPanel = document.querySelector('.slide-in-panel');
    const closeButton = document.querySelector('.close-button');
    const panelImage = document.querySelector('.panel-image');
    const panelDescription = document.querySelector('#panel-description');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Get the description and image path from data attributes
            const description = this.getAttribute('data-description');
            const imageFileName = this.getAttribute('data-image'); // Retrieve the image file name

            // Set the image source and formatted description in the panel
            panelImage.src = `images/${imageFileName}`; // Construct the image path
            panelDescription.innerHTML = `<h2>${description}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>`;

            // Open the panel
            slideInPanel.classList.add('open');
        });
    });

    closeButton.addEventListener('click', function() {
        // Close the panel
        slideInPanel.classList.remove('open');
    });
});
