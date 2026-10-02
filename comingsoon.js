
/* =========================================================
   PULSE HAVEN - COUNTDOWN TIMER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Set your launch date and time here.
  // Format: YYYY-MM-DDTHH:MM:SS
  const launchDate = new Date("2026-12-31T00:00:00").getTime();

  const daysElement = document.getElementById("countdownDays");
  const hoursElement = document.getElementById("countdownHours");
  const minutesElement = document.getElementById("countdownMinutes");
  const secondsElement = document.getElementById("countdownSeconds");
  const timerElement = document.getElementById("countdownTimer");

  // Check that all countdown elements exist.
  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement ||
    !timerElement
  ) {
    return;
  }

  let countdownInterval;

  function updateCountdown() {
    const currentTime = Date.now();
    const timeRemaining = launchDate - currentTime;

    if (timeRemaining <= 0) {
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      clearInterval(countdownInterval);
      timerElement.setAttribute("aria-label", "Launch time reached");
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
      (timeRemaining / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
      (timeRemaining / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
  }

  // Display the countdown immediately.
  updateCountdown();

  // Update every second.
  countdownInterval = setInterval(updateCountdown, 1000);
});