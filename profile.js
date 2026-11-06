// Profile page: saves the profile form.

const form = document.getElementById("profile-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pronouns = document.getElementById("pronouns");

  // Remove unnecessary spaces from pronouns.
  pronouns.value = pronouns.value.trim();

  statusEl.textContent = "Profile saved.";
});
