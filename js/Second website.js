$(function(){


  // Links Add Active Class
  
  $('.links li a').click(function () {
     
      $(this).parent().addClass('active').siblings().removeClass('active');
      
  });
  
  
  // Smooth Scroll To Div 
  
  $('.links li a').click(function () {
     
      $('html, body').animate({
          
          scrollTop: $('#' + $(this).data('scroll')).offset().top -10
          
      }, 1000);
            
  });




    //  Start Button with Effects 

    $('.buttons-effects button').each(function(){

        $(this).prepend('<span></span>')
        
    })

  $('.from-top').hover(function(){

    $(this).find('span').eq(0).animate({

        height: '100%'
    }, 500)

}, function(){

    $(this).find('span').eq(0).animate({


        height: '0'
    }, 500)
})


  // Over lay picture


  $('.our-team .picture').hover(function(){

    $(this).find('.overlay').animate({

        width: '100%',
        opacity: '0.8'
    }, 500)
  }, function(){

    $(this).find('.overlay').animate({

        width: '0',
        opacity: '0'
    }, 300)
  

  })

  
    // Over lay picture


  $('.project .gallery .img').hover(function(){

    $(this).find('.overlay').animate({

        width: '100%',
        opacity: '0.9'
    }, 500)
  }, function(){

    $(this).find('.overlay').animate({

        width: '0',
        opacity: '0'
    }, 300)
  

  })


  // project Shuffle

  $('.project .box-list li').click(function(){

    $('.blink-warning').css('display', 'none')

    
        $(this).addClass('selected').siblings().removeClass('selected')

     
        $($(this).data('filter')).fadeIn().siblings().hide()
          
  })

  $('.project .box-list li:first').click(function(){

   $('.project .gallery .row .all').css('display', 'inline-block')
  })




  






            
  

 


//   // Testimonials 

//     // Our Auto Slider Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(2500).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(2500).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());





// close Reload    
});