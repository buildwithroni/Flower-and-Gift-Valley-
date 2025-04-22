document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.mobile-menu .close-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && closeButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });

        closeButton.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });

        // Close mobile menu when a link is clicked (optional)
        mobileMenu.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // Hero Image Animation (Simple Fade)
    const heroImageContainer = document.querySelector('.hero-image-container');
    const heroImages = ['slide1.png', 'slide2.png', 'slide3.png'];
    let currentHeroIndex = 0;

    if (heroImageContainer) {
        setInterval(() => {
            currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
            const newImage = document.createElement('img');
            newImage.src = heroImages[currentHeroIndex];
            newImage.alt = 'Hero Image';
            newImage.style.opacity = 0;
            newImage.style.borderRadius = '15px';
            newImage.style.position = 'absolute';
            newImage.style.top = 0;
            newImage.style.left = 0;
            newImage.style.width = '100%';
            newImage.style.height = '100%';
            newImage.style.objectFit = 'cover';
            newImage.addEventListener('load', () => {
                heroImageContainer.appendChild(newImage);
                setTimeout(() => {
                    newImage.style.opacity = 1;
                    const oldImage = heroImageContainer.querySelector('img:not(:last-child)');
                    if (oldImage) {
                        oldImage.style.opacity = 0;
                        setTimeout(() => {
                            oldImage.remove();
                        }, 1000); // Match the fade-out transition duration
                    }
                }, 50);
            });
        }, 5000); // Change image every 5 seconds
    }


    // WhatsApp Redirection for Offerings
    const offerItems = document.querySelectorAll('.offer-item');
    const whatsappNumber = '+919474758147'; // Replace with the actual number

    offerItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            const message = encodeURIComponent(`I am interested in: ${category}`);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Dynamic Gallery Image Slider
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryImages = Array.from({ length: 23 }, (_, i) => `gallery_img_${i + 1}.jpg`);
    let currentGalleryIndex = 0;
    const numberOfVisibleImages = 6; // For the 3x2 grid

    function loadInitialGalleryImages() {
        for (let i = 0; i < numberOfVisibleImages; i++) {
            const img = document.createElement('img');
            img.src = galleryImages[i % galleryImages.length];
            img.alt = `Gallery Image ${i + 1}`;
            img.classList.add('active'); // Initially show the first set
            galleryGrid.appendChild(img);
        }
    }

    function startGallerySlider() {
        setInterval(() => {
            const firstVisible = galleryGrid.querySelector('img.active');
            if (firstVisible) {
                firstVisible.classList.remove('active');
                setTimeout(() => {
                    firstVisible.remove();
                    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
                    const newImage = document.createElement('img');
                    newImage.src = galleryImages[currentGalleryIndex];
                    newImage.alt = `Gallery Image ${currentGalleryIndex + 1}`;
                    newImage.style.opacity = 0; // Fade in
                    newImage.classList.add('active');
                    galleryGrid.appendChild(newImage);
                    setTimeout(() => {
                        newImage.style.opacity = 1;
                    }, 50);
                }, 1000); // Match CSS transition duration
            } else {
                // If no active images are found (shouldn't happen), reload initial
                galleryGrid.innerHTML = '';
                loadInitialGalleryImages();
                currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
            }
        }, 7500); // Change image every 7.5 seconds (adjust as needed)
    }

    if (galleryGrid && galleryImages.length >= numberOfVisibleImages) {
        loadInitialGalleryImages();
        startGallerySlider();
    } else if (galleryGrid) {
        // If less than 6 images, just load them without the slider
        galleryImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery Image ${index + 1}`;
            galleryGrid.appendChild(img);
        });
    }

    // Popup Form Functionality (using the onclick from HTML)
    window.showPopup = function() {
        const popup = document.getElementById('contact-popup');
        if (popup) {
            popup.style.display = 'flex';
        }
    };

    window.hidePopup = function() {
        const popup = document.getElementById('contact-popup');
        if (popup) {
            popup.style.display = 'none';
        }
    };
});
