$(document).ready(function(){


// Calling the Login Tab
$('[call-login]').each(function(){

    shouldAttach = isUndefined($(this).attr('xxx-call-login'))?true:false;// verify if element is marked

    if(shouldAttach){
       $(this).click(function(){
           var w = window.innerWidth;
          
           if(w > 760){
                $('[login-slide]').css('left','0%');
                $('[signup-slide]').css('left','0%');
           }else{
            $('#signup-container').css('display','none');
            $('#login-container').css('display','block');
        }

        $('#login-signup-container').attr('active','login');
       })

        $(this).attr('xxx-call-login','yes'); // mark the element
       
    }

 });
 
 // Calling the Sign up Tab
 $('[call-signup]').each(function(){

    shouldAttach = isUndefined($(this).attr('xxx-call-signup'))?true:false;// verify if element is marked

    if(shouldAttach){
       $(this).click(function(){
           var w = window.innerWidth;
           
           if(w > 760){
                $('[login-slide]').css('left','-100%');
                $('[signup-slide]').css('left','-100%');
           }else{
               $('#signup-container').css('display','block');
               $('#login-container').css('display','none');
           }
           $('#login-signup-container').attr('active','signup');
       })

        $(this).attr('xxx-call-signup','yes'); // mark the element
       
    }

 });

 // Calling the Sign up Tab
 $('[password-visibility]').each(function(){

    shouldAttach = isUndefined($(this).attr('xxx-password-visibility'))?true:false;// verify if element is marked

    if(shouldAttach){
       $(this).click(function(){
           let inputElement = $(this).next('input');

           let type = inputElement.attr('type');

           if(type == 'text'){
               inputElement.attr('type','password');
               $(this).html('<i class="fa fa-eye"></i>');
           }else if(type == 'password'){
                inputElement.attr('type','text');
                $(this).html('<i class="fa fa-eye-slash"></i>');
           }



       })

        $(this).attr('xxx-password-visibility','yes'); // mark the element
       
    }

 });

 function decideTab(){
    let tab = $('#login-signup-container').attr('active');
    var w = window.innerWidth;//Get current display width
        //Defining the containers
        let loginContainer = $('#login-container');
        let loginTab = $('#main-login-container');
        let callLoginTab = $('#call-login-container');
        let loginSlider = $('[login-slide]');

        let callSignupTab = $('#call-signup-container');
        let signupContainer = $('#signup-container');
        let signupTab = $('[signup-container]');
        let signupSlider = $('[signup-slide]');

    if(w > 760){ //Desktop
        loginContainer.css('display','block');
        signupContainer.css('display','block');
        loginTab.css('display','block');
        signupTab.css('display','block');
        callLoginTab.css('display','flex');
        callSignupTab.css('display','flex');

        if(tab == 'login'  || (tab !='login' && tab !='signup')){
            loginSlider.css('left','0%');
            signupSlider.css('left','0%');
        }

        if(tab == 'signup'){
            loginSlider.css('left','-100%');
            signupSlider.css('left','-100%');
        }


    }else{//Mobile and Tablet

        loginSlider.css('left','0%');
        signupSlider.css('left','0%');

        callLoginTab.css('display','none');
        callSignupTab.css('display','none');

        loginTab.css('display','block');
        signupTab.css('display','block');

        loginContainer.css('display','block');
        signupContainer.css('display','block');
        
        

        if(tab == 'login' || (tab !='login' && tab !='signup')){
            loginContainer.css('display','block');
            signupContainer.css('display','none');
        }

        if(tab == 'signup'){
            loginContainer.css('display','none');
            signupContainer.css('display','block');
        }
    }
}



 // Making Adjustments screen resize
 window.onresize = function(event) {
    decideTab();
 }



decideTab();

    
    
});