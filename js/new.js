// when click navbar

$('#customer-section').css({display: 'none'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});
$('#login-section').css({display: 'none'});
$('#register-section').css({display: 'none'});
$('#logout-section').css({display: 'none'});


/* start home nav management */
$('#nav-home').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end home nav management */


/* start customers nav management */
$('#nav-customers').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end customers nav management */


/* start items nav management */
$('#nav-items').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end items nav management */


/* start orders nav management */
$('#nav-orders').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end orders nav management */


/* start login nav management */
$('#btn-login').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'block'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'none'});
});
/* end login nav management */


/* start register nav management */
$('#btn-register').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'block'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'none'});
});
/* end register nav management */


/* start logout nav management */
$('#btn-logout').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'block'});
    $('#navbar-section').css({display: 'none'});
});
/* end logout nav management */


/* when click login page's login button */
$('#go-home-page').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'block'});
});
/* end when click login page's login button */


/* when click login page's register button */
$('#go-register-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'block'});
    $('#logout-section').css({display: 'none'});
});
/* end when click login page's register button */


/* when click register page's register button */
$('#go-home-page-2').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'block'});
});
/* when click register page's register button */


/* when click login page's register button */
$('#go-login-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'block'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end when click login page's register button */



/* start adding active class on click */
$('ul').on("click", 'span', function () {
    $('ul span.active').removeClass('active');
    $(this).addClass('active');
});
/* end adding active class on click */

