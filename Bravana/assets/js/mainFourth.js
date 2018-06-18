$('.elements').mouseover(function(){
    $('.elementsOpen').css('display','block')
})
$('.elements').mouseout(function(){
    $('.elementsOpen').css('display','none')
})
$('.elementsOpen').mouseover(function(){
    $(this).css('display','block')
})
$('.elementsOpen').mouseout(function(){
    $(this).css('display','none')
})
$('.nav-link').each(function(){
    $(this).mousemove(function(){
        $(this).css('color','#69B417')
        $(this).next().css('display','block')           
    })
})
$('.nav-link').each(function(){
    $(this).mouseout(function(){
        $(this).css('color','#8c8c8c')
        $(this).next().css('display','none')
    })
})
    $('.dropdown-menu').mousemove(function(){
        $(this).css('display','block')           
})
    $('.dropdown-menu').mouseout(function(){
        $(this).css('display','none')
    })





$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: true
        }
    }
})

var chat = true;
 $('.mini-chat').click(function(){
     if(chat){
     $('.openingChat').css({'right':'0'});
     chat = false;
     }
 })
 $('.fa-times').click(function(){
    $('.openingChat').css({'right':'-950px'});
    chat = true;
    }
);

var a = true;
$('.animate').click(function(){
    if(a){
        $('.changecolor').css({'left':'0'})
        a = false;
    }else{
        $('.changecolor').css({'left':'-300px'})
        a = true;
    }
});
$(".allColors ").click(function(){
var color=$(this).css("backgroundColor");
$(".fa").css({"color":color});
$("a").css({"color":color});
$(".allLines").css({"color":color});
$("span").css({"color":color});
$("hr").css({"backgroundColor":color});
$(".mini-chat").css({"backgroundColor":color});
$("button").css({"backgroundColor":color});
$(".round").css({"backgroundColor":color});



})

$('.count-this').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));

            }

        });

});

    var scrollTop = $(".scrollToTop");
    $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    
    if (topPos > 700) {
        $(scrollTop).css("opacity", "1");

    } else {
        $(scrollTop).css("opacity", "0");
    }
    
    

    }); 

 $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); 

 
$('.activities').click(function(){
    $('#rightPartFirst').css('display','block');
    $('#rightPartSecond').css('display', 'none');
    $('#rightPartThird').css('display','none')
})
$('.followers').click(function(){
    $('#rightPartFirst').css('display','none');
    $('#rightPartSecond').css('display', 'block');
    $('#rightPartThird').css('display','none')
})
$('.following').click(function(){
    $('#rightPartFirst').css('display','none');
    $('#rightPartSecond').css('display', 'none');
    $('#rightPartThird').css('display','block')
})
$('.btnUnfollow').mouseover(function(){
    $(this).css('display','none')
    $(this).next().css('display','block')
})
$('.btnX').mouseout(function(){
    $(this).css('display','none')
    $(this).prev().css('display','block')
})

