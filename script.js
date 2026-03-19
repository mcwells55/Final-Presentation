// Tabs
function openService(evt, serviceName) {
  const contents = document.querySelectorAll(".tabcontent");
  contents.forEach(c => c.style.display = "none");

  const links = document.querySelectorAll(".tablink");
  links.forEach(l => l.classList.remove("active"));

  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Show first tab by default
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablink").click();
});

// Accordion for Price List
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your request has been sent.");
  this.reset();
});