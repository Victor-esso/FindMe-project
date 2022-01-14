$(document).ready(function(){

    const handleSelect = (val,insert) => {

        let selectEl = $('select#survey-items');
        val = val.trim();

        if(insert){
            var survey = '<option value="'+val+'" selected>'+val+'</option>';
            selectEl.append(survey);
        }else{
            $('option[value="'+val+'"]').remove();
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
                $(this).removeAttr('selected');
                isSelected = false;
            }else{
                $(this).attr('selected','');
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
    




});