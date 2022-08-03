$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

$(function(){
    $('#tab1').click(function(){
        $('.banner_img img:nth-child(2), .banner_img img:nth-child(3)').hide();
    });
    $('#tab2').click(function(){
        $('.banner_img img:nth-child(3)').hide();
        $('.banner_img img:nth-child(2)').show();
    });
    $('#tab3').click(function(){
        $('.banner_img img:nth-child(2)').hide();
        $('.banner_img img:nth-child(3)').show();
    });
});
