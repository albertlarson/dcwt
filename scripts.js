$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $(this).toggleClass('active');
        const navLinks = $('#nav-links');
        if ($(this).hasClass('active')) {
            navLinks.css('display', 'flex');
        } else {
            navLinks.css('display', 'none');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#hamburger, #nav-links').length) {
            $('#hamburger').removeClass('active');
            $('#nav-links').css('display', 'none');
        }
    });

    window.addEventListener('message', function(event) {
        if (event.data === 'click-inside-iframe' || event.data === 'navigate-inside-iframe') {
            $('#hamburger').removeClass('active');
            $('#nav-links').css('display', 'none');
        }
    });

    $('#content-frame').on('load', function() {
        this.contentWindow.postMessage('navigate-inside-iframe', '*');
    });

    $('#nav-links a').on('click', function() {
        $('#hamburger').removeClass('active');
        $('#nav-links').css('display', 'none');
    });
});
