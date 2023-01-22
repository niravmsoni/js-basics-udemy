// /3 = Fizz
// /5 = Buzz
// Both divisible by 3 and 5 = FizzBuzz
// Not divisible by 3 or 5 = input
// Not a number = 'Not a Number'


// console.log(typeof 3)
// console.log(fizzBuzz(6));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(7));
// console.log(fizzBuzz(false));
// console.log(fizzBuzz('3'));

// function fizzBuzz(input){
//     if (typeof input !== 'number')
//     return NaN;

//     if (input % 3 === 0 && input % 5 === 0)
//     return 'FizzBuzz';

//     if (input % 3 == 0)
//     return 'Fizz';

//     if (input % 5 == 0)
//     return 'Buzz';

//     return input;
// }



// Speed Limit = 70
// speed increase in 5s -> 1 point
// Use Math.Floow(1.3)
// 12 points -> Suspended


// console.log(checkSpeed(77));

// function checkSpeed(speed){
//     const permissibleSpeed = 70;
//     if (speed <= permissibleSpeed + 5)
//     return 'Ok';
//     else{
//         const calculatedPoint = Math.floor(speed - permissibleSpeed / 5);
//         console.log(calculatedPoint);
//         if (calculatedPoint >= 12){
//             return 'License suspended';
//         }
//         return 'Point:' + calculatedPoint;
//     }
// }


// showNumbers(10);

// function showNumbers(limit){
//     for(let i = 0; i <= limit; i++){
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//     }
// }

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array){
//     let counter = 0;
//     for(let value of array)
//     if (value)
//     counter++;
//     return counter;
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for(let key in obj){
//         if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);
//     }
// }


// console.log(sum(10));

// function sum(limit){
// let sum = 0;

//     for (let i = 0; i <= limit; i++){
//         if (i % 3 === 0 || i % 5 === 0)
//         sum+= i;
//     }

//     return sum;
// }


// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let sum = 0;
//     let counter = 0;
//     for (let key of marks){
//         sum += key;
//         counter++;
//     }

//     var average = sum / counter;
//     console.log(average);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     if (average < 100) return 'A';
// }

//Patterns printing
// showStars(10);

// function showStars(rows){
//     for (let row = 1; row <= rows; row++){
//         let pattern = '';
//         for(let i = 0; i < row; i++){
//             pattern+= '*';
//         }
//         console.log(pattern);
//     }
// }

//OOP
// let circle = {
//     radius: 1,
//     location: {
//         x : 1,
//         y : 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw(); // Method

// function createCircle(){
//     return {
//     radius: 1,
//     location: {
//         x : 1,
//         y : 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };
// }

// var circleObj = createCircle();
// circleObj.draw();

//Factory pattern for creating objects
// function createCircle(radius){
//     return {
//     radius,     // No need radius: radius - See explanation below(In modern JS..)
//     draw(){
//         console.log('draw');
//     }
// };
// }

// var circleObj = createCircle(10);
// circleObj.draw();

// var circle2Obj = createCircle(20);
// circle2Obj.draw();

//Constructur pattern for creating objects
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//         }
//     }

//     const circle = new Circle(10);
//     circle.draw();

// const circle = {
//     radius: 1
// }
// console.log(circle);
// circle.color = 'Yellow';
// circle.draw = function(){}
// console.log(circle);

// delete circle.color;
// delete circle.draw;
// console.log(circle);



// //Factory fn
// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

//Constructor fn
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }


// let x = {value: 10};
// let y = x;

// x.value = 20;

const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}

//Works
// for(let key in circle)
//     console.log(key, circle[key]);

// Errors out since of works only with arrays.
// for(let key of circle)
//     console.log(key);

// for(let key of Object.keys(circle))
//     console.log(key);
    
// for(let key of Object.entries(circle))
// console.log(key);

// if ('radius' in circle) console.log('yes')

// //  Object.keys -> Returns keys present in object
// //    Object.entries -> Returns key value pairs present in object

//Cloning
//Older way
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];


//Newer way using Object.assign
// const another = Object.assign({
//     color: 'yellow'
// }, circle);

// // Spread operator
// const clonedUsingSpread = {...circle};
// console.log('Spread', clonedUsingSpread);

// const name = 'Nirav';
// const email = 
// `Hi ${name},

// Thank you for joining mailing list.

// Regards,
// Nirav`;

const now = new Date();
const date1 = new Date('May 11 2019 09:00');
const date2 = new Date(2022, 4, 11, 9, 0, 0);

now.getDate();
now.setFullYear(2017);
