const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculateBMIBtn = document.getElementById("calculate-BMI");

calculateBMIBtn.addEventListener('click', () => {
  if(height.value && height.value >= 50 && height.value <300 && weight.value && weight.value >= 0.5 && weight.value <= 500) {
    const BMI = height.value/Math.pow(weight.value, 2);
    const BMIDescription = document.getElementById("BMI");
    BMIDescription.innerText = `Your BMI is: ${BMI}`;
    height.value="";
    weight.value="";    
  }
  else {
    alert(`
    fill the height & width to calculate BMI
    height should be in the range of 50-300
    weight should be in the range of 0.5-500`);
  }
 
});


