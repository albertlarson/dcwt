$(document).ready(function() {
    const hamburger = $('#hamburger');
    const navLinks = $('#nav-links');

    hamburger.on('click', function() {
        $(this).toggleClass('active');
        navLinks.css('display', $(this).hasClass('active') ? 'flex' : 'none');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#hamburger, #nav-links').length) {
            hamburger.removeClass('active');
            navLinks.css('display', 'none');
        }
    });

    window.addEventListener('message', function(event) {
        if (['click-inside-iframe', 'navigate-inside-iframe'].includes(event.data)) {
            hamburger.removeClass('active');
            navLinks.css('display', 'none');
        }
    });

    $('#content-frame').on('load', function() {
        this.contentWindow.postMessage('navigate-inside-iframe', '*');
    });

    $('#nav-links a').on('click', function() {
        hamburger.removeClass('active');
        navLinks.css('display', 'none');
    });
});
