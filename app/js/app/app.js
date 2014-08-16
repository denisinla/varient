define(["jquery","mousewheel"],function($){
  $(document).ready(function(){
    init();
    $('.close').on('click',function(){
      $('.video-pod iframe').remove();
      $('.video-pod').css('display','none');
      $('.video-overlay').animate({height: '0px'}, 400);
      $('.video-overlay .close a').removeClass('active');
    });

  });
  function init(){
    $('body').css({'visibility':'visible'});
  }

  function mainMenu(){
      //Right Menu
      $('.btn3').on('click',function(){
        $('.contact').animate({top: '-155px'}, 400).attr('id','current');
        $('#thumb-container').animate({"margin-top": "0"});
      });
      $('.contact .closeIt').on('click',function(){
        console.log('CLICKED!!!');
        $('.contact').animate({top: '100px'}, 400).removeAttr('id');
        $('#thumb-container').animate({"margin-top": "100px"});
      });

      //Features
      $('.btn2').on('click',function(){
        $('.features').animate({top: '-155px'}, 400).attr('id','current');
        $('#thumb-container').animate({"margin-top": "0"});
      });
      $('.features .closeIt').on('click',function(){
        console.log('CLICKED!!!');
        $('.features').animate({top: '100px'}, 400).removeAttr('id');
        $('#thumb-container').animate({"margin-top": "100px"});
      });
      //Directors
      $('.btn1').on('click',function(){
        $('.directors').animate({top: '-155px'}, 400);
        $('#thumb-container').animate({"margin-top": "0"});
        $('.directors').attr('id','current');
      });
      $('.directors .closeIt').on('click',function(){
        console.log('CLICKED!!!');
        $('.directors').animate({top: '100px'}, 400).removeAttr("id");
        $('#thumb-container').animate({"margin-top": "100px"});
      });
      //Right Menu
      $('.menu').on('click',function(){
        $('.menu-expand').animate({top: '-155px'}, 400).attr('id','current');
        $('#thumb-container').animate({"margin-top": "0"});
      });
      $('.menu-expand .closeIt').on('click',function(){
        console.log('CLICKED!!!');
        $('.menu-expand').animate({top: '100px'}, 400).removeAttr('id');
        $('#thumb-container').animate({"margin-top": "100px"});
      });
    }mainMenu();
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