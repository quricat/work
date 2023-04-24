

$(function(){
  //슬라이드 
$('.slickslide').slick({
loop:true,  
dots: true,
infinite: true,
speed: 1000,
slidesToShow: 1,
adaptiveHeight: true,
autoplay:true,
fade:true,
arrows:false
});



/*var navH = $(".navbar").height();
$(window).scroll(function(){
    var wh = $(this).scrollTop();
    console.log(wh);

    if(wh >= navH){$(".navbar").addClass("on");
}else{
    $(".navbar").removeClass("on");
} 
});*/

$(function(){
  $(".sliderb").bxSlider({
    auto:true,
    mode: 'fade',
    captions : true,
    slideWidth:300,
 
  });
});

  $(function(){
    $(".sliderc").bxSlider({
      auto:true,
      mode: 'horizontal',
      captions : true,
      slideWidth:300,
   
    });
  });

    $(function(){
      $(".sliderd").bxSlider({
        auto:true,
        mode: 'vertical',
        captions : true,
        slideWidth:300,
     
      });

    //swiper
    var swiper = new Swiper(".mySwiper",{
      slidesPerView: 4.3,
      spaceBetween:50,
      followFinger:true,
     /* centeredSlides:true,*/
      loop:true,
      autoplay:{delay:1500},
      loopAdditionalSlides:1,
      breakpoints:{ 1024:{slidesPerView:5.3, spaceBetween:30},//웹
                    768:{slidesPerView:3.5, spaceBetween:15,centeredSlides:true},//태블릿
                    390:{slidesPerView:1.5,spaceBetween:15,centeredSlides:true}//모바일
    }
  })
   
    $(function(){
      $('.tab li').click(function(){
        var i =  $(this).index();
        $(".tab li").removeClass('active')
        $(this).addClass('active')

        $('.c').hide();
        $('.c').eq(i).show();  
        return false;
      })
  })

 

    //top버튼
    $(function() {

      $(window).scroll(function() {
          if ($(this).scrollTop() > 300) {
              $('.topbtn').fadeIn();
          } else {
              $('.topbtn').fadeOut();
          }
      });
      
      $(".topbtn a").click(function() {
          $('html, body').animate({
              scrollTop : 0
          }, 500);
          return false;
      });
  });  

  });
 
});
    
    



    
  


