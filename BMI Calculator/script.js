const calcBtn = document.querySelector('.calc-btn');
const resetBtn = document.querySelector('.reset-btn');
const res  = document.querySelector('.res');

calcBtn.addEventListener('click',()=>{
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    if(!height || !weight || height<=0 || weight<=0 || isNaN(height) || isNaN(weight)){
        alert("Please enter valid, positive height and weight.");
        return;
    }

    const hinMeter = height/100;
    const hSqr = hinMeter*hinMeter;

    const bmi = weight/hSqr;

    let category = "";
    let color = "";
    if (bmi < 18.6) {
        category = "Underweight";
        color = 'blue'
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal";
        color = 'green'
    } else {
        category = "Overweight";
        color = 'red'
    }

    res.innerHTML = `
    <div class="bmi-output">
        <p class="bmi-text">Your BMI is: ${bmi.toFixed(2)}</p>
        <p class="category" style="color:${color};">(${category})</p>
        <p class="lifestyle-msg">Keep maintaining a healthy lifestyle!</p>
    </div>
    `;
})

resetBtn.addEventListener('click',()=>{
    document.querySelector('#height').value = "";
    document.querySelector('#weight').value = "";

    res.innerHTML = "";
})