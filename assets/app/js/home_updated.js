$(document).ready(function(){





  //Create Clips
  var clipsStories = new Zuck('clips', {
    skin : 'snapgram',
    avatars : true ,
    list : false ,
    openEffect : true ,
    cubeEffect : true ,
    autoFullScreen : false ,
    backButton : true ,
    backNative : false ,
    previousTap : true ,
    localStorage : true , 
    reactive : false , 
    rtl : false,
  
  
  
    //stories
    stories : [
        //First Story
        {
            id : "4" ,
            photo : "https://thumbs.dreamstime.com/b/apple-logo-wallpaper-dark-background-apple-ios-macos-logo-symbol-d-black-background-shiny-glass-material-ideal-143126220.jpg",
            name : "Apple Inc." ,
            link : "otp.html" ,
            lastUpdated : "2 minutes ago" ,
            seen : false ,
  
            //Load Items inside this story
            items : [
                {
                    id : "14" ,
                    type : "photo" ,
                    length : 360 ,
                    src : "https://images.idgesg.net/images/article/2018/12/apple-products-2018-100782368-large.jpg?auto=webp&quality=85,70" ,
                    preview : "https://media.wired.com/photos/5c09c35f9b6b642d10d8955f/master/w_2400,h_1800,c_limit/Apple-iPhone-Xs-combo-gold-09122018-white-bkg.jpg" ,
                    link : "login.html" ,
                    linkText : '34' ,
                    time : 1640984720 ,
                    seen : false , 
  
                    customKey : "toto",
                    anotherCustomKey : "another toto",
  
                },
                {
                    id : "15" ,
                    type : "photo" ,
                    length : 90 ,
                    src : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/26/966360-920839-iphone.jpg" ,
                    preview : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/26/966360-920839-iphone.jpg" ,
                    link : "login.html" ,
                    linkText : `<i class="fi fi-rr-eye"></i>` ,
                    time : 1640984720 ,
                    seen : false , 
  
                    customKey : "toto",
                    anotherCustomKey : "another toto",
  
                }
            ]
        },
  
        //Second Story
        {
          id : "2" ,
          photo : "images/netflix.webp",
          name : "Netflix" ,
          link : "otp.html" ,
          lastUpdated : "10 seconds ago" ,
          seen : false ,
  
          //Load Items inside this story
          items : [
              {
                  id : "14" ,
                  type : "photo" ,
                  length : 90 ,
                  src : "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg" ,
                  preview : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-feel-good-movies-netflix-finding-ohana-1634593873.jpeg?crop=1.00xw:0.845xh;0,0.0785xh&resize=480:*" ,
                  link : "login.html" ,
                  linkText : "Check Google" ,
                  time : 1640984720 ,
                  seen : false , 
  
                  customKey : "toto",
                  anotherCustomKey : "another toto",
  
              },
              {
                  id : "15" ,
                  type : "photo" ,
                  length : 90 ,
                  src : "images/atmosphere_resorts.jpg" ,
                  preview : "images/beauty.jpg" ,
                  link : "login.html" ,
                  linkText : "Check Google" ,
                  time : 1640984720 ,
                  seen : false , 
  
                  customKey : "toto",
                  anotherCustomKey : "another toto",
  
              }
          ]
        }
  
    ] ,
    
    //Call Backs 
    callbacks : {} ,
  
    //Templates
    template : {
        timelineItem (itemData) {
          return template_01(itemData);
        }
    },
  
    //Languages
    language : {
        unmute: 'Touch to unmute',
        keyboardTip: 'Press space to see next',
        visitLink: 'Visit link',
        time: {
            ago:'ago', 
            hour:'hour', 
            hours:'hours', 
            minute:'minute', 
            minutes:'minutes', 
            fromnow: 'from now', 
            seconds:'seconds', 
            yesterday: 'yesterday', 
            tomorrow: 'tomorrow', 
            days:'days'
        }
    }
  
  });




  //Create Siper
  $('.row-swiper').each(function(){
    //Parameters
    var swiperName = $(this).attr('swiper-name');
    var swiperLoop = isDefined($(this).attr('swiper-loop'),true) ? true: false ;
    var slidesPerView = isDefined($(this).attr('slides-per-view')) ? (numberOnly($(this).attr('slides-per-view')) > 0 ? numberOnly($(this).attr('slides-per-view')) : 'auto' ) : 'auto';
    var direction = isDefined($(this).attr('direction')) ? ($(this).attr('direction').trim() == 'vertical' ? 'vertical' : 'horizontal'): 'horizontal';
    var noFreeMode = isDefined($(this).attr('no-free-mode'),true) ? false: true ;
    var centered = isDefined($(this).attr('centered'),true) ? true: false ;

    console.log($(this).attr('direction'));
    var swiper = new Swiper($(this)[0], {
      // Optional parameters
      direction: direction,
      slidesPerView: slidesPerView,
      loop: swiperLoop,
      freeMode: noFreeMode,
      centeredSlides: centered,
      // Navigation arrows
      navigation: {
        nextEl: '.'+swiperName+'-next',
        prevEl: '.'+swiperName+'-prev',
      },
    });


  })




    $('a[activate-drop]').each(function(){
      $(this).click(function(event){
        event.preventDefault();
        if($(this)[0].hasAttribute('active')){
          $(this).removeAttr('active');
        }else{
          $(this).attr('active','');
        }
      })
    });







    
  $('[play]').each(function(){
    $(this).click(function(e){
      videEl = $(this).siblings('[holder]').children('video');
      videEl[0].play();
      $(this).css('display','none');
    })
  })
  $('[holder]').each(function(){
    $(this).click(function(){
      var playIcon = $(this).siblings('[play]');
      var videoEl = $(this).children('video');
      videoEl[0].pause();
      playIcon.css('display','grid');
    })

  })








});






