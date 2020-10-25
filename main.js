$(document).ready(function () {
    $(".show-register").click(function () {
        $(".form-container").toggleClass("show-register");
        $(".login-form").fadeOut();
        $(".register-form").delay(500).fadeIn();
    });

    $(".show-login").click(function () {
        $(".form-container").toggleClass("show-register");
        $(".register-form").fadeOut();
        $(".login-form").delay(500).fadeIn();
    });
});