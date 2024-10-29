function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  
  const heightInMeter = height/100;  //convert the height from cm to meter  
  const BMI = weight/(heightInMeter*heightInMeter);

  alert(BMI); //alert massege to let me know about something

  if(BMI < 18.5){
    alert("Under Weight");
  }else if(BMI >= 18.5 && BMI < 25){
    alert("Healthy Weight");
  }else if(BMI >= 25 && BMI <30){
    alert("over Weight");
  }else if(BMI >= 30){
    alert("Obesity");
  }

  if(age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24){
    alert("healthy");
  }else if(age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25){
    alert("Healthy");
  }else if(age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26){
    alert("healthy");
  }else if(age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27){
    alert("healthy");
  }else if(age >= 55 && age <= 64 && BMI >= 23 && BMI <=28){
    alert("healthy");
  }else if(age >= 65 && BMI <= 24 && BMI <= 29){
    alert("healthy");
  }else{
    alert("not healthy");
  }

}
