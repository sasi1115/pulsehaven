const passwordInput = document.getElementById("loginPassword");
const passwordToggle = document.getElementById("loginPasswordToggle");

passwordToggle.addEventListener("click", () => {
  const isPasswordHidden = passwordInput.type === "password";

  passwordInput.type = isPasswordHidden ? "text" : "password";

  passwordToggle.innerHTML = isPasswordHidden
    ? '<i data-lucide="eye-off"></i>'
    : '<i data-lucide="eye"></i>';

  passwordToggle.setAttribute(
    "aria-label",
    isPasswordHidden ? "Hide password" : "Show password",
  );

  passwordToggle.setAttribute("aria-pressed", String(isPasswordHidden));

  lucide.createIcons();
});
