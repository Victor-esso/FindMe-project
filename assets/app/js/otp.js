$(document).ready(function(){


    //Handles carrat change on otp input
    $('[input-container]').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            //console.log(e.keyCode);
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39 || $(this).val().length == 1) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

    // updates otp input on keyup
    $('[otp-part]').each(function(){
        $(this).keyup(function(){
            updateOtp();
        })

    });

    //does the otp update on the input
    const updateOtp = () => {
        let otp1 = $('#digit-1');
        let otp2 = $('#digit-2');
        let otp3 = $('#digit-3');
        let otp4 = $('#digit-4');
        let mainOTP = $('[otp-main]');


        let codeOTP = "" + otp1.val().trim() + otp2.val().trim() + otp3.val().trim() + otp4.val().trim();
        mainOTP.val(codeOTP.trim());
    }

 
});