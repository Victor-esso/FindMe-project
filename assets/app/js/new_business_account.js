

$(document).ready(function(){
 

    $('[accodion]').each(function(){

        var accodion = $(this);
     
         $(this).children('button[activate]').click(()=>{
              var isClose = isDefined(accodion.attr('close'),true);
     
             if(isClose){
                 accodion.removeAttr('close');
                 accodion.attr('open','');
             }else{
     
                 accodion.removeAttr('open');
                 accodion.attr('close','');
             }
         })
     
     });


    
});