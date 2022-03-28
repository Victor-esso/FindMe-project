$(document).ready(function(){
 

    var cardSwiper = new Swiper('.card-swiper', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween:20,

        // Navigation arrows
        navigation: {
            nextEl: '.card-next',
            prevEl: '.card-prev',
        },
    });

    //Setting screen height to document height
    $('body').css('height',window.innerHeight+'px');
    
    const myTimeout = setTimeout(function(){
        $('body').css('height',window.innerHeight+'px');
    }, 1000);




    //Items Click
    const resetCardItem = () => {
        $('[cards-container]').find('.swiper-slide[item]').each(function(){
            $(this).removeAttr('active');
        })   
    } 

    $('[cards-container]').find('.swiper-slide[item]').each(function(){
            $(this).click(function(){
                resetCardItem();
                $(this).attr('active',' ');
            })
    })


    
    //Box Check Mark
    $('button[check-btn]').each(function(){
        $(this).click(function(){
            if($(this)[0].hasAttribute('checked')){
                $(this).removeAttr('checked');
            }else{
                $(this).attr('checked',' ');
            }
        })
    });




    card = 5105105105105100;
    console.log(creditCardType(card));
	
    



    $('input[validate-card-type]').keyup(function(){
        var val = $(this).val().trim();
        var cardIcon = $('[card-icon]');
        counter = 0;

        console.log(creditCardType(val));

        if(creditCardType(val) == 'MASTERCARD' ){
            cardIcon.html(`<img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="">`);
            counter++;
        }

        if(creditCardType(val) == 'VISA' ){
            cardIcon.html(`<span class="iconify" data-icon="ri:visa-line" style="color: white;"></span>`);
            counter++;
        }

        if(creditCardType(val) == 'AMEX' ){
            cardIcon.html(`<span class="iconify" data-icon="fontisto:american-express" style="color: white;"></span>`);
            counter++;
        }

        if(counter == 0){

                cardIcon.html(" ");
            
        }
    })













})