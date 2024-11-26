function calculateDiscount() {
  let price = parseFloat(document.getElementById('price').value);
  let discount = parseFloat(document.getElementById('discount').value);

  if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
    alert("Please enter valid values for price and discount.");
    return;
  }

  let discountAmount = (price * discount) / 100;
  let finalPrice = price - discountAmount;

  document.getElementById('final-price').textContent = finalPrice.toFixed(2);
}


function calculateBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let feet = parseInt(document.getElementById('feet').value);
  let inches = parseInt(document.getElementById('inches').value);

  if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  let heightInMeters = (feet * 0.3048) + (inches * 0.0254);


  let weightInKg = weight * 0.453592;


  let bmi = weightInKg / (heightInMeters * heightInMeters);

  document.getElementById('bmi-result').textContent = bmi.toFixed(2);

  let bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  document.getElementById('bmi-category').textContent = bmiCategory;
}