

$(".ajax-contact-form").submit(function(e) {


var str = $(this).serialize();

$.ajax({
type: "POST",
url: "http://www.oksana-shuptar.me/yes/send.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p class="note-msg">Спасибо за заявку!</p>';
$('.fields').hide();
setTimeout(function() {
	$('.note').hide();
	$('.mfp-close').trigger('click');
	$('.fields').fadeIn(500);	
}, 1000);
} else {
result = msg;
}
$('.note').html(result);
}

});
return false;
});


