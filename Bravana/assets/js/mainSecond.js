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


    var scrollTop = $(".scrollToTop");
    $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    
    if (topPos > 600) {
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

 

