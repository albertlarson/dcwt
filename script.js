function toggleMenu(event) {
    event.stopPropagation(); // Prevent this click from closing the menu
    var navbar = document.getElementById("navbar");
    var navLinks = document.getElementById("nav-links");
    var icon = document.querySelector(".icon");

    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        navLinks.style.display = "block";
        icon.classList.add("x"); // Add class for 'X' icon
        icon.innerHTML = '\u2716'; // Unicode for 'X'
    } else {
        navbar.className = "navbar";
        navLinks.style.display = "none";
        icon.classList.remove("x"); // Remove class for 'X' icon
        icon.innerHTML = '\u2630'; // Unicode for hamburger menu
    }
}

// Prevent clicks on the menu from closing it
var navLinks = document.getElementById("nav-links");
navLinks.addEventListener('click', function(event) {
    event.stopPropagation();
});
