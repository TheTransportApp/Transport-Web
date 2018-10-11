$(document).ready(function () {
    $('#open_sidebar, #user_sidebar ul li').on('click', function () {
        $('#user_sidebar').toggleClass('visible');
        $("#open_sidebar").toggleClass('cross');
        $('body').toggleClass('noscroll');
    });
});