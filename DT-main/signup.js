const netlifyIdentity = require("netlify-identity-widget");

// Initialize the Netlify Identity instance
netlifyIdentity.init();

// Get the form element
const form = document.getElementById("signup-form");

// Add a submit event listener to the form
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the username and password from the form
  const username = form.elements["username"].value;
  const password = form.elements["password"].value;

  // Create a new user with the Netlify Identity SDK
  const user = await netlifyIdentity.currentUser.createUser({
    email: username,
    password,
  });

  console.log("New user created:", user);
});
