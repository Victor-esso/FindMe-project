$(document).ready(function(){

    const handleSelect = (val,insert) => {

        let selectEl = $('select#survey-items');
        val = val.trim();

        if(insert){
            var survey = '<option value="'+val+'" selected>'+val+'</option>';
            selectEl.append(survey);
        }else{
            //$('option[value="'+val+'"]').remove();
            selectEl.children('option').each(function(){
                $(this).html().trim() == val ? $(this).remove() : false;
                //console.log($(this).html().trim(),val);
            })
        }

    } 
   

    //Clicking on the survey item
    $('[survey-item]').each(function(){

        //Handling The Click Event
        $(this).click(function(){
            var isSelected = isDefined($(this).attr('selected'));
            var selectedSurvey = $(this).children('[title]').html();
            
            

            //toggle Selected
            if(isSelected){
                
                $('[survey-item]').each(function(){
                    var surveyTitle = $(this).children('[title]').html();
                    if(surveyTitle == selectedSurvey){
                        $(this).removeAttr('selected');
                    }
                })

                isSelected = false;

            }else{
                
                $('[survey-item]').each(function(){
                    var surveyTitle = $(this).children('[title]').html();
                    if(surveyTitle == selectedSurvey){
                        $(this).attr('selected','');
                    }
                })
                isSelected = true;
            }

            //console.log(isSelected,selectedSurvey,isDefined(selectedSurvey)?true:false);

            if(isDefined(selectedSurvey)){
                handleSelect(selectedSurvey,isSelected);
            }

            handleProceed();
            

        })

        var isSelected = isDefined($(this).attr('selected'));
        var selectedSurvey = $(this).children('[title]').html();

        //console.log(isSelected,selectedSurvey,isDefined(selectedSurvey)?true:false);

        if(isDefined(selectedSurvey)){
            handleSelect(selectedSurvey,isSelected);
        }


    })

    const handleProceed = () => {
        let selectEl = $('select#survey-items');
        let btn = $('[proceed-btn]');
        let items = selectEl.children().length;
        
        //console.log(items);

        if(items > 5){
            btn.removeAttr('disabled')
        }else{
            btn.attr('disabled','disabled');
        }
    }

    handleProceed();

    const resetDot = () => {
        $('[next-dot]').removeAttr('active');
        $('[previous-dot]').removeAttr('active');
    }

    const clickNext = () => {
        resetDot();
        //display previous button
        $('[previous-btn]').css('display','block');
        //hide next button
        $('[next-btn]').css('display','none');
        // display form
        $('form[form-input]').css('display','block');


        $('[next-dot]').attr('active',' ');

        if(countItemsVisible() > 45){
            // Move the survey to the next place
            $('[survery-inner]').css('top','-100%');
        }else{
            $('[survery-inner]').css('top','0%');
        }
    }

    const clickPrevious = () => {
        resetDot();
        //display previous button
        $('[previous-btn]').css('display','none');
        //hide next button
        $('[next-btn]').css('display','block');
        // display form
        $('form[form-input]').css('display','none');
        // Move the survey to the next place
        $('[survery-inner]').css('top','0%');
        $('[previous-dot]').attr('active',' ');
    }

    const onResze = () => {
        clickPrevious();
        let w = window.innerWidth;//Get current display width

        if(w < 760){
            // display form
            $('form[form-input]').css('display','block');
            $('[next-btn]').css('display','none');
        }else{
            // display form
            $('form[form-input]').css('display','none');
            $('[next-btn]').css('display','block');
            $('[survery-inner]').css('top','0%');
        }
        

    }
    




    $('[do-next]').each(function(){
        $(this).click(clickNext)
    });

    $('[do-pre]').each(function(){
        $(this).click(clickPrevious)
    });
    

    // Making Adjustments screen resize
    window.onresize = function(event) {
        onResze();
    }


    const resetItems = () => {
        $('[survey-item]').each(function(){
            $(this).css('display','inline-block');
        })
    }


    $('[search-input]').keyup(function(){
        resetItems();
        clickPrevious();
        let val = $(this).val().trim();

        if(val != ""){
            $('[survey-item]').each(function(){
                let selectedSurvey = $(this).children('[title]').html();

                if(!searchDeep(val,selectedSurvey)){
                    $(this).css('display','none');
                }

            })
        }
        
        
    })


    const countItemsVisible = () =>{
        var items = 0;
        $('[survey-item]').each(function(){
            let display  = $(this).css('display');
            if(display != 'none'){
                items++;
            }
        })
        return items;
    }




});