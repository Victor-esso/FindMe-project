$(document).ready(function(){
    
function autoLoad(){

    const parentHeight = () =>{
        
        $('[parent-height]').each(function(){
            let parent = $(this).parent();
            $(this).css('height',parent.css('height'));
            $(this).css('height',parent.css('height'));
        })
    }
    parentHeight();

    const addPercentWidthToHeight = () => {
        $('[height-percentage-width]').each(function(){

            let w = numberOnly($(this).css('width'))*1;
            let percent = numberOnly($(this).attr('height-percentage-width'));
            
            if(percent.trim() != '' && percent != 0 && percent >0){
                let newWidth = ((percent / 100) * w);
                
                $(this).css('height',newWidth + 'px');
            }
            

        });
    }
    addPercentWidthToHeight();

    ///owl carousel
    $('.owl-carousel').each(function(){
        var madeOwl = isDefined($(this).attr('xxx-owlMade'),true)
        
        if(!madeOwl){
                var owlMake = isDefined($(this).attr('owlMake'),true);  

                if(owlMake){
                    var owlItems = isDefined($(this).attr('owlItems'))? parseInt($(this).attr('owlItems')): 3 ;
                    var owlMargin = isDefined($(this).attr('owlMargin'))? $(this).attr('owlMargin') : 0 ;
                    var owlLoop = isDefined($(this).attr('owlLoop'),true)? true : false ;
                    var owlCenter = isDefined($(this).attr('owlCenter'),true)? true : false ;
                    var owlAutoWidth = isDefined($(this).attr('owlAutoWidth'),true)? true : false ;
                    var owlAutoHeight = isDefined($(this).attr('owlAutoHeight'),true)? true : false ;
                    var owlNoMouseDrag = isDefined($(this).attr('owlNoMouseDrag'),true)? false : true ;
                    var owlNoTouchDrag = isDefined($(this).attr('owlNoTouchDrag'),true)? false : true ;
                    var owlNoPullDrag = isDefined($(this).attr('owlNoPullDrag'),true)? false : true ;
                    var owlFreeDrag = isDefined($(this).attr('owlFreeDrag'),true)? true : false ;
                    var owlStagePadding = isDefined($(this).attr('owlStagePadding'))? parseInt($(this).attr('owlStagePadding')) : 0 ;
                    var owlStartPosition = isDefined($(this).attr('owlStartPosition'))? $(this).attr('owlStartPosition') : 0 ;
                    var owlURLhashListener = isDefined($(this).attr('owlURLhashListener'),true)? true : false ;
                    var owlNav = isDefined($(this).attr('owlNav'),true)? true : false ;
                    var owlNoRewind = isDefined($(this).attr('owlNoRewind'),true)? false : true ;
                    var owlNavTextNext = isDefined($(this).attr('owlNavTextNext'))? $(this).attr('owlNavTextNext') : '<span class="material-icons-outlined">chevron_right</span>' ;
                    var owlNavTextPrevious = isDefined($(this).attr('owlNavTextPrevious'))? $(this).attr('owlNavTextPrevious') : '<span class="material-icons-outlined">chevron_left</span>' ;
                    var owlSlideBy = isDefined($(this).attr('owlSlideBy'))? parseInt($(this).attr('owlSlideBy')) : 1 ;
                    var owlSlideTransition = isDefined($(this).attr('owlSlideTransition'))? $(this).attr('owlSlideTransition') : '' ;
                    var owlNoDots = isDefined($(this).attr('owlNoDots'),true)? false : true ;
                    var owlDotsEach = isDefined($(this).attr('owlDotsEach'),true)? true : false ;
                    var owlDotsData = isDefined($(this).attr('owlDotsData'),true)? true : false ;
                    var owlAutoplay = isDefined($(this).attr('owlAutoplay'),true)? true : false ;
                    var owlAutoplayTimeout = isDefined($(this).attr('owlAutoplayTimeout'))? $(this).attr('owlAutoplayTimeout') : 5000 ;
                    var owlPauseHover = isDefined($(this).attr('owlPauseHover'),true)? true : false ;

                    

                    

                    $(this).owlCarousel({
                        items:owlItems, //The number of items you want to see on the screen.

                        loop:owlLoop,   //Infinity loop. Duplicate last and first items to get loop illusion.

                        center:owlCenter,   //Center item. Works well with even an odd number of items.

                        margin:owlMargin,       //margin-right(px) on item.

                        mouseDrag:owlNoMouseDrag,   //Mouse drag enabled.

                        touchDrag:owlNoTouchDrag,   //Touch drag enabled.

                        pullDrag:owlNoPullDrag,     //Stage pull to edge.

                        freeDrag:owlFreeDrag,   //Item pull to edge.

                        startPosition:owlStartPosition,     //Start position or URL Hash string like '#id'.

                        URLhashListener:owlURLhashListener,     //Listen to url hash changes. data-hash on items is required.

                        nav:owlNav,     //Show next/prev buttons.

                        rewind:owlNoRewind,     //Go backwards when the boundary has reached.

                        navText:[owlNavTextPrevious,owlNavTextNext],    //HTML allowed.

                        autoWidth:owlAutoWidth,     //Set non grid content. Try using width style on divs.

                        autoHeight:owlAutoHeight,

                        stagePadding:owlStagePadding,   //Padding left and right on stage (can see neighbours).

                        slideBy:owlSlideBy,     //Navigation slide by x. 'page' string can be set to slide by page.
                        
                        slideTransition:owlSlideTransition,     //You can define the transition for the stage you want to use eg. linear.

                        dots:owlNoDots,     //Show dots navigation.

                        dotsEach:owlDotsEach,     //Show dots each x item.

                        dotsData: owlDotsData,      //Used by data-dot content.

                        autoplay:owlAutoplay,       //Autoplay.

                        autoplayTimeout:owlAutoplayTimeout,     //Autoplay interval timeout.

                        autoplayHoverPause: owlPauseHover     //Pause on mouse hover.

                    });

                }
            $(this).attr('xxx-owlMade',true);
        }                                         
        

    });

}

autoLoad();

window.onresize = function(event) {
    autoLoad();
}


// Making Adjustments screen resize
window.onresize = function(event) {
    autoLoad();
    let w = window.innerWidth;//Get current display width
    if(w > 760){
        $('[nav-section]').css('display','block');
    }else{
        $('[nav-section]').css('display','none');
    }
}







});