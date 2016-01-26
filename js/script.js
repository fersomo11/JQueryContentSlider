$(document).ready(function () {
    // Options
    var speed = 500;            // Fade speed
    var autoswitch = true;      // Auto slider option
    var autoswitchSpeed = 4000  // Auto switch speed
    var autoSlide;
    
    // Add initial active class
    $('.slide').first().addClass('active');
    
    // Hide all slides
    $('.slide').hide();
    
    // Show first slide
    $('.active').show();
    
    // Next event handler
    $('#next').on('click', nextSlide);
    
    // Previous event handler
    $('#previous').on('click', previousSlide);


    $('#settingsForm input').on('change', changeSettings);

    if (autoswitch) {
        autoSlide = setInterval(function () {
            nextSlide();
        }, autoswitchSpeed);
    }


    function changeSettings() {
        autoswitch = document.getElementById('autoSwitch').checked;
        autoswitchSpeed = document.getElementById('autoSwitchSpeed').value;

        if (autoswitch) {
            clearInterval(autoSlide);
            autoSlide = setInterval(function () {
                nextSlide();
            }, autoswitchSpeed);
        } else {
            clearInterval(autoSlide);
        }
    }

    // Functions to switch to next and previous slides  
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        }
        else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    function previousSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        }
        else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});