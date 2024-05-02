// when click navbar
$('#customer-section').css({display: 'none'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});

/* start customers nav management */
$('#nav-customers').on("click", function () {
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
});
/* end customers nav management */

/* start items nav management */
$('#nav-items').on("click", function () {
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
});
/* end items nav management */