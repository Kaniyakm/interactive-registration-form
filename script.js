// Select form and inputs -DOM elements
const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Select error span elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Status message (success or fail)
const statusMessage = document.getElementById("statusMessage");

// Load UN from local storage when page laods
document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("savedUsername");

  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
});

// Helper functions: show/clear error
function showError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  inputEl.classList.add("invalid");
  inputEl.setAttribute('aria-invalid', 'true');
}

function clearError(inputEl, errorEl) {
  errorEl.textContent = "";
  inputEl.classList.remove("invalid");
  inputEl.setAttribute('aria-invalid', 'false');
}

//Validation rules -Constraint Validation API + custom checks
function validateUsername() {
  if (usernameInput.validity.valueMissing) {
    showError(usernameInput, usernameError, "Username is required.");
    return false;
  }
  if (usernameInput.validity.tooShort) {
    showError(usernameInput, usernameError, "Username must be at least 3 characters.");
    return false;
  }

  clearError(usernameInput, usernameError);
  return true;
}

// Validate Email
function validateEmail() {
  if (emailInput.validity.valueMissing) {
    showError(emailInput, emailError, "Email is required.");
    return false;
  }
  if (emailInput.validity.typeMismatch) {
    showError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }

  clearError(emailInput, emailError);
  return true;
}

//Validate Password
function validatePassword() {
  if (passwordInput.validity.valueMissing) {
    showError(passwordInput, passwordError, "Password is required.");
    return false;
  }
  if (passwordInput.validity.tooShort) {
    showError(passwordInput, passwordError, "Password must be at least 8 characters.");
    return false;
  }
  if (passwordInput.validity.patternMismatch) {
    showError(
      passwordInput,
      passwordError,
      "Password must include uppercase, lowercase letters, and a number."
    );
    return false;
  }

clearError(passwordInput, passwordError);
  return true;
}

// Validate Confirm password
function validateConfirmPassword() {
  const el = confirmPasswordInput;

  if (el.validity.valueMissing) {
    showError(el, confirmPasswordError, "Please confirm your password.");
    return false;
  }

  if (passwordInput.value !== el.value) {
    showError(el, confirmPasswordError, "Passwords do not match.");
    return false;
  }

  clearError(el, confirmPasswordError);
  return true;
}

// ---- Real-time validation (input events) ----
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

//Form submit handler
form.addEventListener("submit"), (event) => {
  event.preventDefault();
}
  // Run all validation checks
  const validUsername = validateUsername();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();

  // If any field fails, show error and stop submission
  if (!validUsername || !validEmail || !validPassword || !validConfirm) {
    statusMessage.textContent = "Please fix the errors above.";
    statusMessage.style.color = "red";
    return;
  }

  //SAVE USERNAME TO LOCAL STORAGE
  localStorage.setItem("savedUsername", usernameInput.value);

  //DISPLAY SUCCESS MESSAGE
  statusMessage.textContent = "Registration successful!";
  statusMessage.style.color = "green";

