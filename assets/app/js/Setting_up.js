

const iniLoader = () =>{
    let number = $('#number');
    let circle = $('#circle');

    let counter = 0;
    let percentage = 75;
    dashArray = numberOnly(circle.css('strokeDasharray'));

    console.log(dashArray);
    speed = 90

    loopCounter = setInterval(()=>{
   

        var dashOffset = dashArray - (dashArray * (counter / 100));
    
        console.log(dashOffset);
    
        number.html(`${counter}%`);
    
        circle.css('strokeDashoffset',dashOffset)
    
    
        if(counter == percentage || percentage == 0){
            clearInterval(loopCounter);
        }
    
        counter += 1;
    
    
    },speed)
}

setTimeout(iniLoader, 1000);