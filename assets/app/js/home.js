$(document).ready(function(){

    function openNav(){
        let w = window.innerWidth;//Get current display width
        if(w <= 760){
            scrollPosition = `-${window.scrollY}px`; 
            $('[nav-section]').css('display','flex');      
            $('[nav-section]').css('top',`${window.scrollY}px`);
    
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            $('body').css('top',scrollPosition)
        }
    }
    
    function closeNav(e){
    
        if(eventValidElement(e,'close-nav')){
            let w = window.innerWidth;//Get current display width
            if(w <= 760){ 
                $('[nav-section]').css('display','none');
                
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
            }
            
        }
        
    }

    
    $('[open-nav]').each(function(){
        $(this).click(openNav);
    });
    
    $('[close-nav]').each(function(){
        $(this).click(closeNav);
    });   
    


});