// script.js
// Show the popup form
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Close the popup form
function closePopup() {
    document.getElementById('popup').style.display = 'none';
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

// WhatsApp button in Hero Section
function openWhatsApp() {
    const message = `Hello! I'm interested in your products/services.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
