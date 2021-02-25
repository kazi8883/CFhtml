//*******************
//operator precedence

var now = 2020;
var yearKazi = 1997;
var fullAge = 18;
//multiple operatos
var isFullAge = now - yearKazi >= fullAge;
console.log(isFullAge);

var ageKazi = now - yearKazi;
var ageAbir = 30;
//grouping
var average = (ageKazi + ageAbir) / 2;
console.log(average);

var x,y;
//multiple assignment
x = y = (2 + 3) * 6 /2;
console.log(x,y);

// x = x + 10;
x += 10;
console.log(x);

//************************
//if else statements

var firstName = 'kazi';
var civilStatus = 'Single';

if(civilStatus === 'Married') {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + ' is Single');
}

var x,y;
x = 10; 
y = 20;

if(x>y) {
    alert('Hello!');
} else {
    alert('Hiiii!');
}