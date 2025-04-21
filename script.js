// script.js

// Hero Slider Functionality
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically advance the slider every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Initial display
showSlide(currentSlide);

// Mobile Menu Functionality
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu .close-button');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Contact Popup Functionality
const contactPopup = document.getElementById('contact-popup');

function showPopup() {
    contactPopup.style.display = 'flex';
}

function closePopup() {
    contactPopup.style.display = 'none';
}

// Form Submission Handling (Example - You would typically send this data to a server)
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('fullName').value;
    const services = document.getElementById('services').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const contactNumber = document.getElementById('contactNumber').value;

    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Service:', services);
    console.log('Location:', location);
    console.log('Delivery Date:', date);
    console.log('Contact Number:', contactNumber);

    // Here you would typically send this data to a server using an AJAX request
    // For now, we'll just close the popup after submission
    closePopup();
    document.getElementById('contactForm').reset(); // Clear the form
}
