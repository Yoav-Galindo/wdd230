// Get the inputs values
const tempSpot = document.querySelector('#tempertureInput');

const windSpeedSpot = document.querySelector('#windSpeedInput')

const resultSpot = document.querySelector('#windChillResult')


// Get the button spot
const resultBtn = document.querySelector('#resultBtn');
const clearBtn = document.querySelector('#clearButton');

// Create the fuction for the button
resultBtn.addEventListener('click', function(){
   
    const temp = tempSpot.value;
    
    const t = parseFloat(temp);
  
   
    const speed = windSpeedSpot.value;
    
    const s = parseFloat(speed);

    if (t <= 50 && s > 3){
        const resultOp = 
        35.74 + 
        0.6215 * t - 
        35.75 * s ** 0.16 + 
        0.4275 * t * s ** 0.16;
        const result2Positions = resultOp.toFixed(2);
        resultSpot.innerHTML = `${result2Positions}°F`;
    } else{
        resultSpot.innerHTML = 'N/A'
    }
});
clearBtn.addEventListener('click', function(){

    tempSpot.value = '';
    windSpeedSpot.value = '';
    resultSpot.innerHTML = '';
});
