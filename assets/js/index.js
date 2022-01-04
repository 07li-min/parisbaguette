$(document).ready(function(){
  // banner
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2 
        }
      },{
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false, 
        }
      }
    ]
  });
  // PROMOTION
  $('.promotion-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3 
      }
    },{
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
      }
    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
  // products
  $('.products-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 820, 
        settings: {
          slidesToShow: 4 
        }
      },{
        breakpoint: 768, 
        settings: {
          slidesToShow: 2 
        }
      },{
        breakpoint: 520, 
        settings: {
          slidesToShow: 1,
          arrows:false,
          variableWidth: true
        }
      }
    ]
  });
    
  // 브랜드사이트 
  $('.cont-label').on('click', function(){
    $('.cont-list').slideToggle(400);
  });

    /*모바일메뉴*/ 
  $('.toggle-menu').click(function(){
    $(this).toggleClass("active");
    $('.mob-gnb').toggleClass('active');
  });
  
  $('.hd .mob-gnb .dep1.on').click(function(){
    console.log('클릭')
    $('.hd .mob-gnb .dep2').toggleClass('on');
  });

  // 최종
  $('.pc-gnb .dep1 > a').click(function(e){
    if(this.hash) {
      e.preventDefault();
      
      var targetPos = $(this.hash).offset().top - 80;
      $('body, html').animate({'scrollTop': targetPos});
    } 
  });


  //  promotion    
  $('.promotion-list').on('setPosition', function(){
    var pmsliderHeight = $( '.promotion .img-area' ).height();
    $('.promotion .slider .slick-arrow').css({'top': pmSlideHeight / 2});
  });

});
