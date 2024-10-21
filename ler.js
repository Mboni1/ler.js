
function invitation(Age, Message) {
    if (Age > 18) {
        return (`${Message}`)
    } else {
        return (`no ${Message}`)
    }
}
console.log(invitation(19, 'sex'));

function print(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(`my name is ${print('claude', 'mbonimpa')}`);


function prime(high) {
    for (let i = 0; i < high; i++) {
        if (i % 3 != 0 && i % 2 != 0 && i % 5 != 0) {
            console.log(i)
        }
    }
}

console.log(prime(50));

function greet(greet, name) {
    return greet + name
} console.log(greet('hello', 'john'));

function randomPassword() {
    const passwordChoosen = 'abcdefjhiklmn012346';
    return passwordChoosen
} console.log(randomPassword(''));

function areaOfCircle(r) {
    const pi = 3.14
    return `the area of a circle with radius ${r} is ${pi * r * r}`
}

console.log(areaOfCircle(31))

function Area(r) {
    const pi = 3.14
    return pi * r * r
}
console.log(Area(5));


function power(a, b) {
    return Math.pow(a, b);
}
// console.log(power(5, 2));

function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString('mbonimpa, claude, adolphe'));

function add(x, y) {
    return x + y;
}
console.log(add(10, 234));

function maxNumber(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxNumber(7, 10, 6));

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(35));

function area(length, width) {
    return length * width;
}
console.log(area(6, 5));

function calculateArea(length = 1, width = 1) {
    return length * width;
}

console.log(calculateArea(5, 10));
console.log(calculateArea());

function createUser(name, age = 12, isActive = true) {
    return console.log(`name is ${name}, age is ${age} and active is ${isActive}`)
}
console.log(createUser(name = 'test', age = 60));
const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const age = 25;
if (age >= 18) {
    console.log(`sarah can start driving lincense 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another
         ${yearsLeft} years :)`);
}
let num = 20;
if (num % 2 === 0) {
    num = "Even";
} else {
    num = "Odd";
}
console.log(num);

let myName = "mbonimpa";
for (let i = 0; i < 10; i++) {
    console.log(myName);

}
let number = prompt("enter a number:");
function checkNumber(number) {
    if (number > 0) {
        console.log("the number is positive.");

    } else if (number < 0) {
        console.log("the number is negative.");

    } else {
        console.log("the number is zero.");
    }
}
console.log(checkNumber(5));




var name = 'stane'
var myName = function () {
    for (i = 0; i <= 10; i++) {
        console.log(`${name} ${i}`);
    }
}

var mysec = function () {
    var name = 'claude'
    var secondName = 'adolphe'
    return secondName + ' ' + name
}

console.log(myName())
console.log(mysec());
var i
var name = "bae"
var myName = function () {
    for (i = 0; i < 4; i++) {
        console.log(`${name} ${i}`);
    }
}
var myotherName = function () {
    var name = 'pucuri'
    var surName = 'baby'
    return name + ' ' + surName
}
console.log(myName());
console.log(myotherName());
const properties = ["vila", "lodge", "house"];
let txt = "";
for (let x of properties) {
    txt += x + " ";

}
console.log(txt);

const properties = { rooms: "5", bathroom: "2", kichen: "1" };
let txt = "";
for (let x in properties) {
    txt += properties[x] + " ";
}
console.log(txt)

let txt = "";
let i = 0
while (i < 5) {
    txt += " " + i; i++
}
console.log(txt)

let txt = ""
let i = 0
do { txt += " " + i; i++ }
while (i < 5)
console.log(txt);

const number = "even"
let txt = "";
for (let x of number) {
    txt += x + "\n";
}
console.log(txt);

let txt = ""
for (i = 0; i < 10; i++) {
    if (i === 2) { continue }
    txt += i + " ";
}
console.log(txt);
const name = "claude";
let txt = " "
for (const x of name) {
    txt += x + "\n ";
}
console.log(txt);

const number = new Set(["1", "2", "3", "4"]);
console.log(number);

const letters = new Set(["a", "b", "c", "d"]);

let txt = "";
for (const x of letters) {
    txt += x + "\n";
}
console.log(txt)


//basic array operations(methods)

const friends = ['michael', 'steven', 'peter'];
// Add elements
const newLength = friends.push('jay');
friends.push('jay');
console.log(friends);

friends.unshift('john');
console.log(friends);

//Remove elements
friends.pop();// Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('steven'));//1
console.log(friends.indexOf('bob'));//-1

friends.push(23);
console.log(friends.includes('steven'));//true
console.log(friends.includes('bob'));//false
console.log(friends.includes('23'));//false
console.log(friends.includes(23));//true

if (friends.includes('steven')) {
    console.log('you have a friend called steven');
}
// coding challenge
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2
}
console.log(calcTip(70));//10.5

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// objects
const jonasArray = [
    'jonas',
    'doe',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven']
];
const jonas = {
    firstName: 'jonas',
    lastName: 'doe',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['mike', 'peter', 'steven']
};
console.log(jonas);

//dot vs brackets notation

const jonas = {
    firstName: 'jonas',
    lastName: 'doe',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['mike', 'peter', 'steven'],
};
console.log(jonas);
console.log(jonas.job);// teacher
//or
console.log(jonas['job']);//teaher


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);//jonas
console.log(jonas['last' + nameKey]);// doe

const interstedIn = prompt('What do you want to know about jonas? choose btn firstName, lastName, age, job and friends ');
console.log(jonas.interstedIn);// undefined

console.log(jonas[interstedIn]);


if (jonas[interstedIn]) {
    console.log(jonas[interstedIn]);
    console.log('wrong request!What do you want to know about jonas? choose btn firstName, lastName, age, job and friends ')
}
jonas.location = 'portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);



//coding challenge #3

const mark = {
    fullName: 'mark mill',
    mass: 70,
    height: 1.74,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
console.log(mark.bmi);

//iteration: the for loop

console.log('lifting weights repetition 1🏋️');
console.log('lifting weights repetition 2🏋️');
console.log('lifting weights repetition 3🏋️');
console.log('lifting weights repetition 4🏋️');
console.log('lifting weights repetition 5🏋️');
console.log('lifting weights repetition 6🏋️');
console.log('lifting weights repetition 7🏋️');
console.log('lifting weights repetition 8🏋️');
console.log('lifting weights repetition 9🏋️');
console.log('lifting weights repetition 10🏋️');

//for looop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}🏋️`);
}


//ternary operators

const age = 23;
//age <= 18 ? console.log('i like to drink vine') : console.log('i like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//looping arrays, breaking and continuing

const jonas = [
    'jonas',
    'doe',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven'],
    true
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    //filling types array
    types[i] = typeof jonas[i] //or types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// contuine and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

//looping backwards and loops in loops 

const jonas = [
    'jonas',
    'doe',
    2037 - 1991,
    'teacher',
    ['mike', 'peter', 'steven'],
];
//0, 1,..., 4
//4, 3,..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetion${rep}`)
    }
}

//The while loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}🏋️`);
}
let rep = 1;
while (rep <= 10) {

    console.log(`lifting weights repetition ${rep}🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {

    console.log(` you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end...');

}
//coding challenge #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));