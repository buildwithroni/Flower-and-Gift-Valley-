// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Start the slider
    showSlide(currentIndex);
    const sliderInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // WhatsApp Redirection for Offerings
    const offeringItems = document.querySelectorAll('.offering-item');
    const whatsappNumber = '+919474758147'; // Replace with your actual WhatsApp number

    offeringItems.forEach(item => {
        item.addEventListener('click', () => {
            const offering = item.getAttribute('data-offering');
            const message = `Enquiry about: ${offering}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Show the popup form
    function showPopup() {
        document.getElementById('contact-popup').style.display = 'flex';
    }

    // Close the popup form
    function closePopup() {
        document.getElementById('contact-popup').style.display = 'none';
    }

    // Handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const services = document.getElementById('services').value;
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const contactNumber = document.getElementById('contactNumber').value;

        // Example of form data logging for processing
        console.log('Form Submitted: ', { fullName, services, location, date, contactNumber });

        // You would typically send this data to a server here
        // For now, we'll just show a confirmation message
        alert('Thank you for contacting Ixora Flower! We will get back to you soon.');

        // Close the form
        closePopup();

        // Optionally, you can clear the form fields after submission
        document.getElementById('contactForm').reset();
    }

    // Dynamic Gallery
    const dynamicGalleryBoxes = document.querySelectorAll('.gallery-box-dynamic');
    const allGalleryImages = [
        'gallery_img_1.jpg',
        'gallery_img_2.jpg',
        'gallery_img_3.jpg',
        'gallery_img_4.jpg',
        'gallery_img_5.jpg',
        'gallery_img_6.jpg',
        'gallery_img_7.jpg',
        'gallery_img_8.jpg',
        'gallery_img_9.jpg',
        'gallery_img_10.jpg',
        'gallery_img_11.jpg',
        'gallery_img_12.jpg',
        'gallery_img_13.jpg',
        'gallery_img_14.jpg',
        'gallery_img_15.jpg',
        'gallery_img_16.jpg',
        'gallery_img_17.jpg',
        'gallery_img_18.jpg',
        'gallery_img_19.jpg',
        'gallery_img_20.jpg',
        'gallery_img_21.jpg',
        'gallery_img_22.jpg',
        'gallery_img_23.jpg'
    ];
    const numberOfImages = allGalleryImages.length;
    const changeInterval = 5500; // 5.5 seconds

    dynamicGalleryBoxes.forEach((box, index) => {
        let currentImageIndex = Math.floor(Math.random() * numberOfImages); // Start with a random image

        function changeImage() {
            const imgElement = box.querySelector('img');
            if (imgElement) {
                imgElement.src = allGalleryImages[currentImageIndex];
                imgElement.style.opacity = 0; // Fade out
                setTimeout(() => {
                    imgElement.style.opacity = 1; // Fade in
                }, 200); // Short delay for fade effect
            }
            currentImageIndex = (currentImageIndex + 1) % numberOfImages;
        }

        changeImage(); // Initial image load
        setInterval(changeImage, changeInterval);
    });

    // Mobile Menu Toggle
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click and scroll to section
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for header height if needed
                    behavior: 'smooth'
                });
            }
            navLinks.classList.remove('open');
        });
    });
});
