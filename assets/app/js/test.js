// var stories = new Zuck('stories', {
//     skin : 'snapgram',
//     avatars : true ,
//     list : false ,
//     openEffect : true ,
//     cubeEffect : true ,
//     autoFullScreen : false ,
//     backButton : true ,
//     backNative : false ,
//     previousTap : true ,
//     localStorage : true , 
//     reactive : false , 
//     rtl : false,



//     //stories
//     stories : [
//         //First Story
//         {
//             id : "4" ,
//             photo : "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
//             name : "me" ,
//             link : "otp.html" ,
//             lastUpdated : "" ,
//             seen : false ,

//             //Load Items inside this story
//             items : [
//                 {
//                     id : "14" ,
//                     type : "photo" ,
//                     length : 90 ,
//                     src : "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg" ,
//                     preview : "images/beauty.jpg" ,
//                     link : "login.html" ,
//                     linkText : "Check Google" ,
//                     time : 1640984720 ,
//                     seen : false , 

//                     customKey : "toto",
//                     anotherCustomKey : "another toto",

//                 },
//                 {
//                     id : "15" ,
//                     type : "photo" ,
//                     length : 90 ,
//                     src : "images/atmosphere_resorts.jpg" ,
//                     preview : "images/beauty.jpg" ,
//                     link : "login.html" ,
//                     linkText : "Check Google" ,
//                     time : 1640984720 ,
//                     seen : false , 

//                     customKey : "toto",
//                     anotherCustomKey : "another toto",

//                 }
//             ]
//         }

//     ] ,
    
//     //Call Backs 
//     callbacks : {} ,

//     //Templates
//     template : {
//         timelineItem (itemData) {
//             var div = '<div class="story victor">';
//             div+='<a class="item-link" href="otp.html">';
//             div+= ' <span class="item-preview"><img src="images/Aldo.jpg"></span>'
//             div+='<span class="info" itemProp="author" itemScope="" itemType="http://schema.org/Person"><strong class="name" itemProp="name">OKEKE</strong><span class="time">{{story.lastUpdated}}</span></span> ';
//             div+= '</a>';
//             div+='<ul class="items"></ul>';
//             div+= '</div>';
//             return div;
//         }
//     },

//     //Languages
//     language : {
//         unmute: 'Touch to unmute',
//         keyboardTip: 'Press space to see next',
//         visitLink: 'Visit link',
//         time: {
//             ago:'ago', 
//             hour:'hour', 
//             hours:'hours', 
//             minute:'minute', 
//             minutes:'minutes', 
//             fromnow: 'from now', 
//             seconds:'seconds', 
//             yesterday: 'yesterday', 
//             tomorrow: 'tomorrow', 
//             days:'days'
//         }
//     }

// });




//Setting screen height to document height
//$('body').css('height',window.innerHeight+'px');

