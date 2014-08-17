define(["jquery","mousewheel"],function($){

  $(document).ready(function(){
    init();
    $('.close').on('click',function(){
      $('.video-pod iframe').remove();
      $('.video-pod').css('display','none');
      $('.video-overlay').animate({height: '0px'}, 400);
      $('.video-overlay .close a').removeClass('active');
    });

    /*
    --------------------------------
    Initialize Bottom Navigation
    --------------------------------
  */
    bottomNavigation();
  });
  function init(){
    $('body').css({'visibility':'visible'});
  }
  /*
    --------------------------------
    Bottom Navigation Content
    --------------------------------
  */
  function bottomNavigation(){
    $('[data-pop-up]').on('click',function(event){
      event.preventDefault();

      var callClass = $(this).data('pop-up');

      $('.'+callClass).animate({top: '-155px'}, 400).attr('data-current','active');
      $('#thumb-container').animate({"margin-top": "0px"});

    });
    $('[data-close]').on('click',function(event){
      event.preventDefault();
      var callClose = $(this).data('close');

      $('.'+callClose).animate({top: '100px'}, 400).removeAttr("data-current");
      $('#thumb-container').animate({"margin-top": "100px"});

    });
  }
  /*
    --------------------------------
    Video Content
    --------------------------------
  */
  function googleGlass(){
      $('#google-glass').on('click',function(){
        $('.video-overlay').animate({height: '700px'}, 400);
        $('.video-pod').css({'display':'block'});
        setTimeout(function(){
          $('.video-pod').html('<iframe src="//player.vimeo.com/video/94024888?portrait=0&badge=0&color=000000&title=0&byline=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        },1300);
        setTimeout(function(){
          $('.video-overlay .close a').addClass('animated rotateIn active');
        }, 1310);
      });
    }googleGlass();
  function medeas(){
      $('#medeas').on('click',function(){
        $('.video-overlay').animate({height: '700px'}, 400);
        $('.video-pod').css('display','block');
        setTimeout(function(){
          $('.video-pod').html('<iframe src="//player.vimeo.com/video/100926161?portrait=0&badge=0&color=000000&title=0&byline=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        },1300);
        setTimeout(function(){
          $('.video-overlay .close a').addClass('animated rotateIn active');
        }, 1310);
      });
    }medeas();

  function atdd(){
    $('#atdd').on('click',function(){
      $('.video-overlay').animate({height: '700px'}, 400);
      $('.video-pod').css('display','block');
      setTimeout(function(){
        $('.video-pod').html('<iframe src="//player.vimeo.com/video/100927515?portrait=0&badge=0&color=000000&title=0&byline=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      },1300);
      setTimeout(function(){
        $('.video-overlay .close a').addClass('animated rotateIn active');
      }, 1310);
    });
  }atdd();

  function moby(){
    $('#moby').on('click',function(){
      $('.video-overlay').animate({height: '700px'}, 400);
      $('.video-pod').css('display','block');
      setTimeout(function(){
        $('.video-pod').html('<iframe src="//player.vimeo.com/video/70319615?portrait=0&badge=0&color=000000&title=0&byline=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      },1300);
      setTimeout(function(){
        $('.video-overlay .close a').addClass('animated rotateIn active');
      }, 1310);
    });
  }moby();

  function acidgirls(){
    $('#acidgirls').on('click',function(){
      $('.video-overlay').animate({height: '700px'}, 1000);
      $('.video-pod').css('display','block');
      setTimeout(function(){
        $('.video-pod').html('<iframe src="//player.vimeo.com/video/5968214?portrait=0&badge=0&color=000000&title=0&byline=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      },1300);
      setTimeout(function(){
        $('.video-overlay .close a').addClass('animated rotateIn active');
      }, 1310);
    });
  }acidgirls();
});