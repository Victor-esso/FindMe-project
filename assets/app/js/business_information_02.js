




$(document).ready(function(){
 

    var buttonSwiper = new Swiper('.button-swiper', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween:10,
    });

    


    //Setting screen height to document height
    $('body').css('height',window.innerHeight+'px');

    document.onresize = function (){
        //Setting screen height to document height
        $('body').css('height',window.innerHeight+'px');
    }



    //Input Files
    $('input[bang-file]').each(function(){
        $(this).change(function(){
            var len = $(this)[0].files.length;
            var files = $(this)[0].files;
     
            var tableHolder = $(this).siblings('[table-holder]');
     
            var responseHolder = tableHolder.find('tbody');
     
            var responseTr = "";
     
            //show table
            tableHolder.css('display','block');
     
            ///Emptying the response holder
            responseHolder.html('');
     
            if(len > 0 ){
     
                 for (var i = 0; i < len; i++) {
                     var fileName = files[i].name; // get file name
                     var fileSize = files[i].size; // get file size 
                     var fileType = files[i].type; // get file type
                     var fileExtension = fileName.split(".").pop(); //get file extension
                     
                     responseTr += `
                         <tr>
                             <td><div><span class="iconify" data-icon="tabler:notes"></span><span>${fileName}</span></div></td>
                             <td style="width:fit-content;">${niceBytes(fileSize)}</td>
                             <td>${fileExtension}</td>
                             <td><button remove="${i}"><span class="iconify" data-icon="clarity:window-close-line"></span></button></td>
                         </tr>
                     
                     `;
                     
                 }
     
                 responseHolder.html(responseTr);
     
                 responseHolder.find('button[remove]').each(function(){
                     $(this).click(function(event){
                         event.preventDefault();
                         var fileIndex = numberOnly($(this).attr('remove'));
     
                         var fileInput = $(this).parents('[table-holder]').siblings('input[bang-file]');
     
                         //var fileListArr = Array.from(fileInput[0].files);
                         var fileListArr = [...fileInput[0].files]
                         fileListArr.splice((fileIndex), 1);
     
                         console.log(fileIndex,fileListArr);
                         fileInput[0].files = fileListArr;
                         console.log(fileInput[0].files);
                         
                     })
                 })
     
     
            }else{
                 //Hiding table
                 tableHolder.css('display','none');
            }
             
         })
    });

    $('button[pd-click]').each(function(){
        $(this).click(function(event){
            event.preventDefault();
        })
    });

    //Submit a form
    $('button[trigger-submit]').each(function(){
        $(this).click(function(event){
            event.preventDefault();
            var formId = isDefined($(this).attr('for')) ? $(this).attr('for') : false;
            if(formId){
                $('#'+ formId).trigger('submit');
            }
        })
    });




    
    $('button[trigger-submit-all-required]').each(function(){
        $(this).click(function(event){
            var btnSubmit = $(this);
            event.preventDefault();
            var formId = isDefined($(this).attr('for')) ? $(this).attr('for') : false;
            $(this).siblings('div[Error-msg]').remove();/// removing the error msg

            if(formId){

                let formEl = $('#'+ formId);
                let inputs = formEl.find('input');
                var counter = 0;

                if(!formEl[0].hasAttribute('allow-submit')){
                    //Checking to see if the inputs are incomplete
                    inputs.each(function(){

                        if($(this).val().trim() == ''){
                            counter++;
                        }

                        var keyHash = key(5);
                        $(this).attr('submit-reset',keyHash);

                        const resetFormProcess = () =>{
                            inputs.each(function(){
                                $(this).removeAttr('submit-reset');
                                $(this).unbind('click');
                            })

                            formEl.removeAttr('allow-submit');
                            btnSubmit.html('Sumbit');
                            btnSubmit.siblings('div[Error-msg]').remove();/// removing the error msg
                            console.log('clicked');
                        }

                        $('[submit-reset ="'+keyHash+'"]').click(function(){
                            resetFormProcess();
                        })

                    })

                    if(counter > 0){
                        formEl.attr('allow-submit','');
                        $(this).html('Submit Anyway ?');
                        $(this).before(`<div error-msg><span class="iconify" data-icon="bi:patch-question"></span> <span>Some Form fields has not been fille, your business would be unverified</span></div>`);
                    }else{
                        formEl.trigger('submit');
                        $(this).html('Submit');
                    }
                }else{
                    
                    formEl.trigger('submit');
                    $(this).html('Submit');
                    

                }
                

                //$('#'+ formId).trigger('submit');
            }

        });
    })












    const businessType = {
        buttons:$('button[business-type]'),
        input:$('input[business-type]'),
        resetButtons:function(){
            this.buttons.each(function(){
                $(this).removeAttr('active');
            })
        },
        activateButton:function(btn){
            this.resetButtons();
            let val = btn.attr('value');
            this.input.val(val);
            btn.attr('active','');
        }
    }

    businessType.buttons.each(function(){
        $(this).click(function(){
            businessType.activateButton($(this));
        })
    })

    $('div[info-icon-relative]').each(function(){
        $(this).click(function(){
            let msg = $(this).children('div[msg]');
            if(msg.css('display') == 'block'){
                msg.css('display','none');
            }else{
                msg.css('display','block');
            }
        })
    })






    
});

