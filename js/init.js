$(document).ready(function () {

	// SEARCH
	$("#srch").keypress(function () {
		$("#srch-popup").show();
	});
	// клик вне области окна что бы закрыть само окно.
	$(document).click(function (event) {
		if ($(event.target).closest("#srch-popup").length) return;
		$("#srch-popup").hide();
		event.stopPropagation();
	});

	// CALL-BACK
	$("#btn-call-back").on("click", function(){
		$("#call-back-popup").fadeIn();
	});
	$("#call-back-popup").find(".popup").on("click", function(event){
		event.stopPropagation();
	});
	$("#call-back-popup .close, #call-back-popup, #callme").on("click", function(){
		closeCallBack()
	});


	//BASKET

	$("#cart-btn").on("click", function(){
		$(".basket").fadeToggle();
	});
	$("#close-basket-window").on("click", function(){
		$(".basket").fadeOut();
	});

	$('.number-grow').find('.plus').on('click', function(){
		var currentInput = $(this).parents('.number-grow').find('input');
		var inputVal = parseInt( currentInput.val());
		var newInputVal = inputVal + 1;
		currentInput.val(newInputVal);
	});
	$('.number-grow').find('.min').on('click', function(){
		var currentInput = $(this).parents('.number-grow').find('input');
		var inputVal = parseInt( currentInput.val());
		var newInputVal = inputVal - 1;
		if(newInputVal > 0) {
		    currentInput.val(newInputVal);
		}
	});


	//Delete item from Basket cart
	$(document).on('click', ".basket-remove .remove", function(){
		$(this).parents('tr').remove();
	})
});

$(window).load(function () {
	$('#slides').slidesjs({
		width: 940,
		height: 528,
		navigation: {
			effect: "fade"
		},
		pagination: {
			effect: "fade"
		},
		effect: {
			fade: {
				speed: 400
			}
		}
	});
});


closeCallBack = function(){
	$("#call-back-popup").fadeOut();
}