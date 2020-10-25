$(document).ready(function () {
    $(".login").click(function () {
        $(".form-container").toggleClass("show-register");
        $(".login-form").toggleClass("d-none");
        $(".register-form").toggleClass("d-none");
    });
});