function sanitize(input) {
    // Very basic sanitization to prevent XSS
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    const error = document.getElementById("error");

    let fname = sanitize(document.getElementById("fname").value.trim());
    let lname = sanitize(document.getElementById("lname").value.trim());
    let email = sanitize(document.getElementById("email").value.trim());
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    if (!fname || !lname || !email || !password || !cpassword) {
        error.innerHTML = "All fields are required.";
        return false;
    }

    if (!validateEmail(email)) {
        error.innerHTML = "Invalid email format.";
        return false;
    }

    if (password !== cpassword) {
        error.innerHTML = "Passwords do not match.";
        return false;
    }

    error.innerHTML = "";
    alert("Form submitted successfully (with security measures).");
    return true;
}
