document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    // Prevent the form from submitting to a server for demonstration
    event.preventDefault();

    // Get form data
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;

    // Display an alert with form data
    alert(
      `Form submitted!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
  });
});
