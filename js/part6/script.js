//boolean logic

var firstName = "Abir";

var age = "25";

if(age < 13){
    alert(firstName + ' is a boy.');
} 
else if(age >= 13 && age < 20){
    alert(firstName + ' is a teenager');
} 
else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man');
}
else {
    alert(firstName + ' is a man');
}