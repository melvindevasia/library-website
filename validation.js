function validateLoginForm() {
  let email = document.getElementById("login-email").value.trim();
  let password = document.getElementById("login-password").value.trim();

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 8 characters, contain uppercase, lowercase, and a number.");
    return false;
  }

  window.location.href = "index.html";
  return false;
}

function validateSignupForm() {
  let email = document.getElementById("signup-email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let age = document.getElementById("age").value.trim();
  let password = document.getElementById("signup-password").value.trim();

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number (10 digits or formats XXX-XXX-XXXX / XXX.XXX.XXXX / XXX XXX XXXX).");
    return false;
  }

  if (age <= 0) {
    alert("Please enter a valid age.");
    return false;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 8 characters, contain uppercase, lowercase, and a number.");
    return false;
  }

  window.location.href = "index.html";
  return false;
}

function validateEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  let phonePattern = /^(\d{10}|\d{3}[-. ]\d{3}[-. ]\d{4})$/;
  return phonePattern.test(phone);
}

function validatePassword(password) {
  let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passPattern.test(password);
}

function checkPasswordStrength(inputId, strengthId) {
  let password = document.getElementById(inputId).value;
  let strengthBar = document.getElementById(strengthId);

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;

  if (strength <= 1) {
    strengthBar.textContent = "Poor";
    strengthBar.style.color = "red";
  } else if (strength === 2 || strength === 3) {
    strengthBar.textContent = "Medium";
    strengthBar.style.color = "orange";
  } else if (strength === 4) {
    strengthBar.textContent = "Strong";
    strengthBar.style.color = "green";
  }
}
