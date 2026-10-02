// =====================================
// PASSWORD VISIBILITY TOGGLE
// =====================================

const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");

const signupPasswordToggle = document.getElementById("signupPasswordToggle");

const signupConfirmPasswordToggle = document.getElementById(
  "signupConfirmPasswordToggle",
);

// Toggle password visibility
function togglePasswordVisibility(input, button, label) {
  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";

  button.innerHTML = isHidden
    ? '<i data-lucide="eye-off" aria-hidden="true"></i>'
    : '<i data-lucide="eye" aria-hidden="true"></i>';

  button.setAttribute(
    "aria-label",
    isHidden ? `Hide ${label}` : `Show ${label}`,
  );

  button.setAttribute("aria-pressed", String(isHidden));

  lucide.createIcons();
}

// Password eye button
signupPasswordToggle.addEventListener("click", () => {
  togglePasswordVisibility(signupPassword, signupPasswordToggle, "password");
});

// Confirm password eye button
signupConfirmPasswordToggle.addEventListener("click", () => {
  togglePasswordVisibility(
    signupConfirmPassword,
    signupConfirmPasswordToggle,
    "confirm password",
  );
});

// =====================================
// PASSWORD MATCH VALIDATION
// =====================================

function checkPasswordMatch() {
  if (signupConfirmPassword.value === "") {
    signupConfirmPassword.setCustomValidity("");
    return;
  }

  if (signupPassword.value !== signupConfirmPassword.value) {
    signupConfirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    signupConfirmPassword.setCustomValidity("");
  }
}

// Check whenever either password changes
signupPassword.addEventListener("input", checkPasswordMatch);
signupConfirmPassword.addEventListener("input", checkPasswordMatch);

// =====================================
// SIGNUP FORM VALIDATION
// =====================================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  checkPasswordMatch();

  if (!signupForm.checkValidity()) {
    event.preventDefault();
    signupForm.reportValidity();
  }
});
