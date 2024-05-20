function calculateBMI() {
    var height = parseFloat(document.querySelector('#height').value);
    var weight = parseFloat(document.querySelector('#weight').value);

    var bmi = weight / ((height / 100) * (height / 100));

    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    var result = 'Your BMI is ' + bmi.toFixed(2) + ', which means you are ' + bmiCategory + '.';
    document.querySelector('#result').innerText = result;
}
