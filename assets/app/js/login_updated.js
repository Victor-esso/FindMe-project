$(document).ready(function(){
 
 
 
    // Making password visible
    $('[password-visibility]').each(function(){

        shouldAttach = isUndefined($(this).attr('xxx-password-visibility'))?true:false;// verify if element is marked

        if(shouldAttach){
        $(this).click(function(){
            let inputElement = $('#'+$(this).attr('for'));

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

    
});