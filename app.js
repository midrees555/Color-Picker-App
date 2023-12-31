console.log("Hello");
 
let redColorChangerInput = document.querySelector('#red-col-pic-slider');
let greenColorChangerInput = document.querySelector('#green-col-pic-slider');
let blueColorChangerInput = document.querySelector('#blue-col-pic-slider');
let opacityInput = document.querySelector('#opacity-slider');
let newsHeadline = document.querySelector('.news-headline');
let newsHeadlineText = document.querySelector('.news-headline p');
 
let coloredArea = document.querySelector('.color-container');
let coloredAreaSpan = document.querySelector('.color-container span');

let redValueArea = document.querySelector('.red-value-area');
let greenValueArea = document.querySelector('.green-value-area');
let blueValueArea = document.querySelector('.blue-value-area');

let redValue;
let greenValue;
let blueValue;
let opacityValue;



newsHeadlineText.addEventListener('mouseover', () => {
    newsHeadlineTextAnimateStop();
})

newsHeadlineText.addEventListener('mouseout', () => {
    newsHeadlineTextAnimateStart();
})


redColorChangerInput.addEventListener('input', () => {
    redValue = redColorChangerInput.value;
    
    redValueArea.innerHTML = redValue;
    colorChanged();
})
 
greenColorChangerInput.addEventListener('input', () => {
    greenValue = greenColorChangerInput.value;
    
    greenValueArea.innerHTML = greenValue;
    colorChanged();
})

blueColorChangerInput.addEventListener('input', () => {
    blueValue = blueColorChangerInput.value;
    
    blueValueArea.innerHTML = blueValue;
    colorChanged();
})

opacityInput.addEventListener('input', () => {
    opacityValue = opacityInput.value;
    
    colorChanged();
})


function colorChanged () {
    redValue = redColorChangerInput.value;
    greenValue = greenColorChangerInput.value;
    blueValue = blueColorChangerInput.value;
    opacityValue = opacityInput.value;
    
    coloredArea.style.backgroundColor = `rgba(${redValue},${greenValue},${blueValue}, ${opacityValue})`;
    
    coloredAreaSpan.innerHTML = `RGBa(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`;

    if(redValue <= 60 || greenValue <= 60 || blueValue <= 60) {
        coloredAreaSpan.style.color = "#fff";
        coloredAreaSpan.style.textShadow = '3px 3px 1px #000';
    }

    if(redValue >= 170 || greenValue >= 170 || blueValue >= 170) {
        coloredAreaSpan.style.color = "#000";
    }
}


// function for news Headline animation...
function newsHeadlineTextAnimateStart() {
    newsHeadlineText.style.animationPlayState = 'running';
}

function newsHeadlineTextAnimateStop() {
    newsHeadlineText.style.animationPlayState = 'paused';
}