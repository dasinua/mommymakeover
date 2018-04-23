(function($, undefined){
    $(function(){

	// slick-reviews
		$('.slick-reviews').slick({
	      dots: true,
	      arrows: false,
		  infinite: true,
		  fade: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 15000,
		});

    // anchors
    var active = $("#daMenu a");
 	active.on("click", function(event) {
        event.preventDefault();

        active.removeClass('da-active');

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

            $(this).addClass('da-active');

        $("html, body").animate({
            scrollTop: currentBlockOffset - 0
        }, 500);

	});

	// button-top
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {
        $('#buttonTop').fadeIn();
        } else {
        $('#buttonTop').fadeOut();
        }
        });
        $('#buttonTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
        active.removeClass('da-active');
        active.first().addClass('da-active');

    });

    //mail
	    $("#form1, #form2").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $("#myModal").modal('hide');
          $("#info").modal('hide');
	      $("#thanks").modal('show');
	      $("#form1, #form2").trigger("reset");

	    });
	    return false;
	    });


    });
})(jQuery);
