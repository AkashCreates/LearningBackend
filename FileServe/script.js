// Run when the window finishes loading
window.addEventListener("load", () => {
  console.log("Page loaded!");
});

// Select all nav links
const navLinks = document.querySelectorAll("nav a");

// Add click event to each link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Reset all links to default color
    navLinks.forEach((a) => {
      a.style.color = "white";
    });

    // Change color of clicked link
    link.style.color = "yellow"; // or any color you like

    alert(`You clicked: ${link.textContent}`);
  });
});
