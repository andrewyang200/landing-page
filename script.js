document.addEventListener('DOMContentLoaded', () => {
  const waitlistForm = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('email-input');
  const formMessage = document.getElementById('form-message');

  if (waitlistForm) {
      waitlistForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent default form submission

          const email = emailInput.value.trim();

          if (!validateEmail(email)) {
              displayMessage('Please enter a valid email address.', 'error');
              return;
          }

          // --- Placeholder for actual submission ---
          // In a real application, you would send the email to your backend
          // or a third-party mailing list service here using fetch() or XMLHttpRequest.
          console.log('Form submitted with email:', email);

          // Simulate a successful submission
          displayMessage('Thank you! You\'ve been added to the waitlist.', 'success');
          emailInput.value = ''; // Clear the input field

          // Example using fetch (replace with your actual endpoint)
          /*
          fetch('/api/waitlist', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: email }),
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  displayMessage('Thank you! You\'ve been added to the waitlist.', 'success');
                  emailInput.value = '';
              } else {
                  displayMessage(data.message || 'An error occurred. Please try again.', 'error');
              }
          })
          .catch(error => {
              console.error('Error submitting form:', error);
              displayMessage('An error occurred. Please try again.', 'error');
          });
          */
          // --- End Placeholder ---
      });
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  function displayMessage(message, type) {
      if (formMessage) {
          formMessage.textContent = message;
          formMessage.className = `form-message ${type}`; // Add 'success' or 'error' class
      }
  }
});