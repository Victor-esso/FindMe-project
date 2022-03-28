$(document).ready(function(){
 
$('input[main-input]').focus(function(){
    $('div[bottom-section]').attr('open','');
})

$('input[main-input]').blur(function(){
    
    setTimeout(function(){
        $('div[bottom-section]').removeAttr('open');
    },250)
})

$('input[main-input]').keyup(function(){
    var val= $(this).val();
    
    $('[suggestions]').children().each(function(){
        
        $(this).css('display','block');
         
       var suggest = $(this).html();
       !searchDeep(val,suggest) ? $(this).css('display','none'): '';

    });


   

})


$('[suggestions]').children().each(function(){
       $(this).click(function(event){
           event.preventDefault();

        $('input[main-input]').val($(this).html());

       });
});




});