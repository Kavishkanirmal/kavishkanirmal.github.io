// Smooth Scroll Animation for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submit Animation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    form.reset();
});


// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('toggle-active');
});

// Animate Toggle Icon
menuToggle.addEventListener('click', () => {
    const spans = menuToggle.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[1].classList.toggle('hide');
    spans[2].classList.toggle('rotate--45');
});


// ------- Snow Animation -------
document.addEventListener('DOMContentLoaded', () => {
    // Get the snow container element
    const snowContainer = document.querySelector('.snow-container');

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomize snowflake size, position, and animation speed
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
        const positionX = Math.random() * window.innerWidth; // Random horizontal position
        const positionY = Math.random() * window.innerHeight; // Random vertical starting position

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${positionX}px`;
        snowflake.style.top = `${positionY}px`; // Allow snowflakes to start at random positions

        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay before starting

        // Append the snowflake to the container
        snowContainer.appendChild(snowflake);

        // Remove the snowflake after animation ends
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    // Generate snowflakes at an interval (every 100ms)
    setInterval(createSnowflake, 100);
});
