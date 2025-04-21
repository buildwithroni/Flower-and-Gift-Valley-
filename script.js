// script.js

// Mobile Menu Functionality
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');
const menuButton = document.querySelector('.menu-button'); // Get the text-based menu button

if (mobileMenuIcon && mobileMenu && closeButton && menuButton) {
    mobileMenuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open'); // Open the mobile menu on text button click as well
    });

    // Close menu on link click (for both mobile navigations)
    const mobileLinks = document.querySelectorAll('.nav-links.mobile-only a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// Hero Slider
const slides = document.querySelectorAll('.hero-slide');
let heroIndex = 0;
const heroInterval = 7000; // 7 seconds

function showHeroSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % slides.length;
    showHeroSlide(heroIndex);
}

showHeroSlide(heroIndex);
setInterval(nextHeroSlide, heroInterval);

// WhatsApp Redirection for Offerings
const offeringItems = document.querySelectorAll('.offering-item');
const whatsappNumber = '+919474758147';

offeringItems.forEach(item => {
    item.addEventListener('click', () => {
        const offering = item.getAttribute('data-offering');
        const message = `Enquiry about: ${offering}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

// Show/Close Contact Popup
function showPopup() {
    document.getElementById('contact-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}

// Handle Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const services = document.getElementById('services').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const contactNumber = document.getElementById('contactNumber').value;
    console.log('Form Submitted: ', { fullName, services, location, date, contactNumber });
    alert('Thank you for contacting Ixora Flower! We will get back to you soon.');
    closePopup();
    document.getElementById('contactForm').reset();
}

// Dynamic Gallery (6 boxes changing every 5.5 seconds with fade animation)
const dynamicGalleryBoxes = document.querySelectorAll('.gallery-box-dynamic');
const allGalleryImages = [
    'gallery_img_1.jpg', 'gallery_img_2.jpg', 'gallery_img_3.jpg', 'gallery_img_4.jpg',
    'gallery_img_5.jpg', 'gallery_img_6.jpg', 'gallery_img_7.jpg', 'gallery_img_8.jpg',
    'gallery_img_9.jpg', 'gallery_img_10.jpg', 'gallery_img_11.jpg', 'gallery_img_12.jpg',
    'gallery_img_13.jpg', 'gallery_img_14.jpg', 'gallery_img_15.jpg', 'gallery_img_16.jpg',
    'gallery_img_17.jpg', 'gallery_img_18.jpg', 'gallery_img_19.jpg', 'gallery_img_20.jpg',
    'gallery_img_21.jpg', 'gallery_img_22.jpg', 'gallery_img_23.jpg'
];
const numberOfImages = allGalleryImages.length;
const galleryInterval = 5500; // 5.5 seconds
const visibleGalleryBoxes = 6;

// Initially show only 6 gallery boxes
dynamicGalleryBoxes.forEach((box, index) => {
    if (index >= visibleGalleryBoxes) {
        box.style.display = 'none';
    }
});

let galleryCurrentImageIndices = Array.from({ length: visibleGalleryBoxes }, () => Math.floor(Math.random() * numberOfImages));

function changeGalleryImages() {
    dynamicGalleryBoxes.forEach((box, index) => {
        const imgElement = box.querySelector('img');
        if (imgElement) {
            imgElement.classList.remove('fade-in');
            setTimeout(() => {
                imgElement.src = allGalleryImages[galleryCurrentImageIndices[index]];
                imgElement.classList.add('fade-in');
                galleryCurrentImageIndices[index] = (galleryCurrentImageIndices[index] + 1) % numberOfImages;
            }, 500); // Adjust fade duration
        }
    });
}

setInterval(changeGalleryImages, galleryInterval);

// Mobile Menu Toggle (ensure it works with the new structure)
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open'); // For the desktop menu on smaller screens if JS is enabled
    });
}

if (mobileMenuIcon && mobileMenu && closeButton) {
    mobileMenuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    const mobileLinks = document.querySelectorAll('.nav-links.mobile-only a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}
