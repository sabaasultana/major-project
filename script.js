document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', handleSubmit);

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', updatePasswordStrength);
});

function handleSubmit(event) {
    event.preventDefault();

    // Get form fields' values
    const fullName = document.getElementById('fullName').value;
    // Get other form fields' values (Email, Phone, Password, Confirm Password)

    // Validate each field
    const errors = [];

    // Validate Full Name
    if (fullName.trim().length < 5) {
        errors.push("Full Name must be at least 5 characters long.");
    }

    // Validate Email
    // Use regex to check for the @ character in the email

    // Validate Phone Number
    // Check for the invalid phone number and 10-digit format

    // Validate Password
    // Check for password criteria (length, not containing username)

    // Validate Confirm Password
    // Check if password and confirm password match

    // Validate Terms and Conditions Checkbox
    // Ensure the checkbox is checked before submitting

    // Display errors or submit the form
    if (errors.length > 0) {
        displayErrors(errors);
    } else {
        // Submit the form (you can use Ajax to submit the data to the server)
        alert('Form submitted successfully!');
        form.reset();
    }
}

function updatePasswordStrength() {
    // Password strength indicator logic
    // Update the strength indicator based on the password's complexity
}

function displayErrors(errors) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.innerHTML = errors.join('<br>');
    const form = document.getElementById('registrationForm');
    form.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}