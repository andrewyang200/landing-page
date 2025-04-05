document.addEventListener('DOMContentLoaded', () => {
    // Use the new form ID if you changed it, otherwise keep as is
    const waitlistForm = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email-input');
    // Use the new message element ID
    const formMessage = document.getElementById('form-message');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const email = emailInput.value.trim();

            // Basic validation (can be enhanced)
            if (!validateEmail(email)) {
                // Use the new displayMessage function with appropriate classes
                displayMessage('Please enter a valid email address.', 'error');
                return;
            }

            // --- Placeholder for actual submission ---
            console.log('Form submitted with email:', email);

            // Simulate a successful submission
            displayMessage('Thank you! You\'ve been added to the waitlist.', 'success');
            emailInput.value = ''; // Clear the input field

            // --- End Placeholder ---
        });
    }

    function validateEmail(email) {
        // Simple regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function displayMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            // Use the new class structure for messages
            formMessage.className = `form-message-apple ${type}`; // Add 'success' or 'error' class
        }
    }
});