
// GET ELEMENTS FROM HTML
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

// ADD 1 TO CURRENTACTIVE AND MAKES SURE CURRENT ACTIVE IS NOT GREATER
// THAN THE AMOUNT OF NUMBEERS (CIRCLES) AND THEN RUN THE UPDATE FUCTION
next.addEventListener('click', () => {
    currentActive ++;
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

// remove 1 to currentactive and makes sure currentactive is not less than 0
// then it runs the update function
prev.addEventListener('click', () => {
    currentActive --;
    if(currentActive < 1) {
        currentActive = 1;
    }

    update()
})


function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // gets an array of all elements with the class 'active'
    const actives = document.querySelectorAll('.active')

    // this is to set the blue bar it subtracts 1 because there is always 1 line
    // less than circles
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    // this changes the property of the buttons 
    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}