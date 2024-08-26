document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const descriptionBox = document.getElementById('description-box');

    // Set default description
    descriptionBox.textContent = 'Adult Crash Cart';

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            const description = this.getAttribute('data-description');
            descriptionBox.textContent = description;
            descriptionBox.style.display = 'block'; // Ensure it is visible on hover
        });

        item.addEventListener('mouseout', function() {
            // Keep the default text when the mouse is out
            descriptionBox.textContent = 'Adult Crash Cart';
        });
    });
});
