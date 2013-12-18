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
});

$(window).load(function () {

});


closeCallBack = function(){
	$("#call-back-popup").fadeOut();
}