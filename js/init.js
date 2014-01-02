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

	$(".side-menu").find(".title").on("click", function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next().slideUp();

		}
		else {
			$(this).addClass('active').next().slideDown();
		}
	});

	//Delete item from Basket cart
	$(document).on('click', ".basket-remove .remove", function(){
		$(this).parents('tr').remove();
	});



	$(".sort-blocks").on("click", function(){
		if (!$(this).hasClass("active")) {
			$(".sort-list").removeClass("active");
			$(this).addClass("active");
			$(".product-items").removeClass("grid-lists");
		}
	});
	$(".sort-list").on("click", function(){
		if (!$(this).hasClass("active")) {
			$(".sort-blocks").removeClass("active");
			$(this).addClass("active");
			$(".product-items").addClass("grid-lists");
		}
	});

	//show first four items and show all

	if ($(".first-four").length) {
		if ($(".first-four").find(".item").length > 4) {
			$(".first-four").find(".show-rest span").text("[" + $(".first-four").find(".item").length + "]");
			$(".first-four").find(".item").eq(0).show().end()
										.eq(1).show().end()
										.eq(2).show().end()
										.eq(3).show();
		}
		$(".show-rest").on("click", function(event){
			event.preventDefault();
			$(this).css("opacity" , "0").parents(".first-four").find(".item").fadeIn();
		});
	}

	// Tabs
	var tab = $(".tabs");
	if(tab) {
		tab.each(function(){
			var idx = $(this).find("li.active").index();
			$(this).parents('.tab-holder').find('.tabs-container .tab-block').eq(idx).show();
		});


		tab.find("li").click(function() {
			if($(this).hasClass("active")) {
				return false;
			} else {
				$(this).parents('.tabs').find("li").removeClass('active');
				$(this).parents('.tab-holder').find(".tab-block").hide();
				var idx = $(this).addClass("active").index();
				$(this).parents('.tab-holder').find(".tab-block").eq(idx).show();

			}
		});
	}

	if ($(".product-details ").length) {
		priceHeight();
	}



}); // end Document Ready

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
	if ($( "#slider-range").length){
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 10,
			values: [ 0, 10 ],
			slide: function( event, ui ) {
			$( "#amount" ).val( "от  " + ui.values[ 0 ] + "   до   " + ui.values[ 1 ] );
			}
		});
	}

	if($(".fancybox").length){
		$(".fancybox").fancybox();
	}

});


function closeCallBack(){
	$("#call-back-popup").fadeOut();
}
function priceHeight(){
	$(".product-price").height($(".product-details").height())
}
