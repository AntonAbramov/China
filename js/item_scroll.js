$(document).ready(function() {
    //Carusel start
    var caruselLength = 0;
    var visiblElements = 3;
    var carusel = $(".item-scroller");
    var step = carusel.find("li").outerWidth(true);
    carusel.find("li").each(function(){
        caruselLength += $(this).outerWidth(true); // считаем сумарную длинну
    });
    //console.log(caruselLength);
    //carusel.find("ul").width(caruselLength + 1); // выставляем длинну

    //Prev BTN
    $("button.prev").on("click", function(){
        if(carusel.find("li").first().hasClass("current")) {
            return false;
        }
        else {
            carusel.find("li.current").removeClass("current").prev().addClass("current");
            insertImg($('.current'));
        }

        var self = $(this);
        var currentCarusel = self.parent().next().find("ul");
        var currentPosition = currentCarusel.css("left");
        var d = currentPosition.search(/\p/);
        var newCurrentPosition = parseInt(currentPosition.substr(0, d));
        if(newCurrentPosition == 0) {
            return false;
        }
        //self.attr('disabled', 'disabled');

        currentCarusel.animate({
            left : newCurrentPosition += step
        }, function(){
            self.removeAttr("disabled");
        });
        console.log(newCurrentPosition);
    });

    // Next BTN
    $("button.next").on("click", function(){
        console.log("next btn pushed");
        if(carusel.find("li").last().hasClass("current")) {
            return false;
        }
        else {
            carusel.find("li.current").removeClass("current").next().addClass("current");
            insertImg($('.current'));
        }

        var self = $(this);
        var currentCarusel = self.parent().next().find("ul");
        var currentPosition = currentCarusel.css("left");
        var d = currentPosition.search(/\p/);
        var newCurrentPosition = parseInt(currentPosition.substr(0, d));
        console.log("1");
        if(newCurrentPosition == -caruselLength + visiblElements* step) {
            return false;
        }
        console.log("2");
        //self.attr('disabled', 'disabled');
        currentCarusel.animate({
            left : (newCurrentPosition -= step) + 'px'
        }, function(){
            self.removeAttr("disabled");
        });

    });

    //when page has downloaded first item will be active
    carusel.find("li:eq(0)").addClass('current');

    // Event on click
    carusel.find("li").on("click", function(){
        var self = $(this);
        if(self.hasClass("current")) {
            return false;
        }
        else {
            carusel.find("li.current").removeClass("current");
            self.addClass('current');
            insertImg(self);
        }
    });
    //console.log(step);

    function insertImg(item){
        //console.log(item.find('img').attr('src'));
        var path = item.find('img').data('src');
        $(".big-product-slider .item-holder").find("img").fadeOut(function(){
            $(".big-product-slider .item-holder").find('img').attr("src", path);
        }).fadeIn();
    }



}); // Document.Ready

