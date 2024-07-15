document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    const navLinks = document.getElementById('nav-links');
    if (this.classList.contains('active')) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
