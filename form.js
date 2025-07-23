const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = passwordInput.value;
  const passwordPattern = /^(?=.*[0-9]).{6,}$/; // At least 6 chars and 1 number
  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be 6+ characters and include a number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (isValid) {
    successMsg.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
