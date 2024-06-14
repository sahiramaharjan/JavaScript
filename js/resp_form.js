const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toogle("active");
});
const form = document.getElementById("registerForm");
const tooglePassword = document.getElementById("tooglePassword");
const password = document.getElementById("password");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    alert(
      `Registration successful!\n\nUsername: ${username.value}\nEmail: ${email.value}`
    );
  }
});

function validateForm() {
  let isValid = true;

  if (username.value.trim() === "") {
    setError(username, "Username is required");
    isValid = false;
  } else {
    clearError(username);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  } else {
    clearError(email);
  }

  if (password.value.trim() === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  } else {
    clearError(password);
  }

  return isValid;
}

function setError(input, message) {
  const formGroup = input.closest(".form-group");
  const errorDisplay = formGroup.querySelector(".error-message");
  if (errorDisplay) {
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
  }
}

function clearError(input) {
  const formGroup = input.closest(".form-group");
  const errorDisplay = formGroup.querySelector(".error-message");
  if (errorDisplay) {
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

tooglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  tooglePassword.classList.toogle("ri-eye-line");
  tooglePassword.classList.toogle("ri-eye-off-line");
});
