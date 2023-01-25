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

// const now = new Date();
// const date1 = new Date('May 11 2019 09:00');
// const date2 = new Date(2022, 4, 11, 9, 0, 0);

// now.getDate();
// now.setFullYear(2017);


//street
//city
//zipCode

//showAddress function
// const address = {
//     street: 'New Chandrodaya Society',
//     city: 'Surendranagar',
//     zipCode: 363001
// }

// function showAddress(address){
//     for(let key in address){
//         console.log(key, address[key]);
//     }
// }

// showAddress(address);

//Exercise2: Same address object. Return it from Factory function and constructor function
// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// console.log(createAddress('a','b','c'));


// function CreateAddr(street, city, zipCode){
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
// }

// console.log(new CreateAddr('a','b','c'));

//Exercise3: Object Equality - Use the same constructor function used to create object in above exercise. Create 2 objects from it. Implement 2 functions AreEqual() & AreSame()

// let address1 = new CreateAddr('a','b','c');
// let address2 = new CreateAddr('a','b','c');
// let address3 = address1;

// console.log(areEqual(address1, address2));  //true
// console.log(areSame(address1, address2));   //false
// console.log(areSame(address1, address3));   //true

// function CreateAddr(street, city, zipCode){
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
// }

// function areEqual(address1, address2){
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
// }

// // Checks objects in memory. Whether they're same or not.
// function areSame(address1, address2){
//     return address1 === address2;
// }


// const numbers = [5, 6];

// //At the end
// numbers.push(7);
// console.log(numbers);

// //At the beginning
// numbers.unshift(3,4);
// console.log(numbers);

// //At the middle. First argument(Starting index), second argument(Number of items we want to delete. Keep it 0 if we want to preserve existing array items), then add whatever characters we want to add
// numbers.splice(2, 0, 'a', 'b');


// const numbers = [1, 2, 3, 4, 1];

// console.log(numbers.indexOf('1'));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1));

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ]

// console.log(courses.includes({id: 1, name:'a'}));   // Returns false
// We get false since these are 2 different objects
// Since they're present in 2 different locations in memories 

//Correct way to use .find() method
// let course = courses.find(function(course){
//     return course.name === 'a';
// });

//Arrow function syntax
    //Remove function keyword.
    // In case of single param, remove ()brackets
    // In case of no param, have ()

    // In case of single statement like below, remove return keyword and {} as well.
    // Read as course goes to course.name equals a
// let course = courses.find(course => course.name === 'a');

// console.log(course);

//Remove elements
// const numbers = [1, 2, 3, 4];

// //End -.pop() -> Removes last element of array and returns it.
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// //Beginning 
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// //Middle
// numbers.splice(2, 1);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// let another = numbers;  // Arrays = Reference type

// //Soln#1 - Doesn't work for more than 1 references to our array(Recommended)
// // numbers = [];

// // Soln#2 - Set .length to 0(Recommended)
// // numbers.length = 0;

// // Soln#3 - Use splice method
// // numbers.splice(0, numbers.length);

// //Soln#4 - Pop method - Use it in loop(Least recommended)
// while(numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// //Combine using concat()
// const combined = first.concat(second);   // Returns new array. First & second will remain untouched
// console.log(combined);

// //Slice array using slice()
// const slice = combined.slice(2);
// console.log(slice);


// const first = [{id: 1}];// Reference type[Object].
// const second = [4, 5, 6];

// const combined = first.concat(second);  
// // With concat, the returned array's 0th element will also point to same reference in memory.
// // So, directly updating the id will result in updated combined array's 0 element.
// first[0].id = 2;

// console.log(combined);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// //Combine using spread operator.
// //Gives more flexibility if we want to add anything between these 2 arrays
// const combined = [...first, 'a', ...second]   // Returns new array. First & second will remain untouched
// console.log(combined);

// const copy = [...combined];
// console.log(copy);


// const numbers = [1, 2, 3];

// // Soln#1 - Using for..of loop
// for (let number of numbers)
//     console.log(number);

// // Soln#2 - Using forEach loop
// numbers.forEach(function(number){
//     console.log(number);
// });

// // Soln#3 - Using forEach with arrow function
// numbers.forEach(number => console.log(number));

// const numbers = [1, 2, 3];
// //Soln#1 - Join array using join() method. Specify separator if any. In our case ','
// const joined = numbers.join(',');

// console.log(joined);

// //Another similar implementation but with strings.
// const message = 'This is my first message';
// //Split string where space is encountered
// const parts = message.split(' ');
// console.log(parts);

// //Join array using '-'
// const combined = parts.join('-');
// console.log(combined);


// const numbers = [2, 3, 1];

// // Soln#1 - It converts the array into string and then sorts it. Useful if arrays have nmbers/strings
// numbers.sort();
// console.log(numbers);

// //Soln#2 - Reverses array
// numbers.reverse();
// console.log(numbers);

// // For objects, we need to pass a custom function(Or Arrow Fn) to sort method and implement custom logic
// const courses = [ 
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'javascript'}
// ]

// courses.sort((a, b) => {
//     // a < b => -1
//     //a > b => 1
//     // a === b => 0

//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);

// //Check if at-least 1 number is > 0
// const numbers = [1, 2, 3, -1];

// const atLeastOnePositive = numbers.some((value) => {
// return value >= 0;
// });

// console.log(atLeastOnePositive);

//filter() method returns filtered items from array based on the condition
// const numbers = [1, -1, 2, 3];

// const items = numbers
// .filter(n => n >= 0)
// .map(n => ({value: n}));

// console.log(items);


// const numbers = [1, -1, 2, 3];

// //Older way
// // let sum = 0;
// // for (let n of numbers)
// // sum += n;

// //Using .reduce(callbackfunction, initial value of accumulator)

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

// Generate array between max and min passed inside the function
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max){
//     const rangedArray = [];
//     for(let i = min; i <= max; i++)
//     rangedArray.push(i);

//     return rangedArray;
// }

//Write a function equivalent to .includes() function
// const numbers = [1, 2, 3, 4];
// const searchElement = 5;

// console.log(selfIncludes(numbers, 5));

// //Should return true/false
// function selfIncludes(array, searchElement){
//     if (array.indexOf(searchElement) === -1)
//     return false;
//     else
//     return true;
// }

// Implement except() function.
// const numbers = [1, 2, 3, 4];

// const output = except(numbers, [1]);

// console.log(output);

// function except(array, excluded){
//     const outputArr = [];

//     for(let element of array){
//         if (element !== excluded){
//             if (!excluded.includes(element))
//             outputArr.push(element);
//         }
//     }
//     return outputArr;
// }

// Move element inside array
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 0, 0);

// console.log(output);

// function move(array, index, offset){
//     const position = index + offset;

//     if (position >= array.element || position < 0){
//         console.error('Invalid offset.');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }


//Count occurrences of item in an array
// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);

// console.log(count);

// // Soln#1
// // function countOccurrences(array, searchElement){
// //     let output = 0;

// //     for (let item of array){
// //         if (item === searchElement)
// //         output++;
// //     }

// //     return output;
// // }

// //Soln#2 - Using Reduce
// function countOccurrences(array, searchElement){
//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return accumulator + occurrence;
//     }, 0);
// }


//Get Max item of array.
// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);

// console.log(max);

// //Soln#1 - Using for loop
// // function getMax(array){
// //     if (array.length === 0) return undefined;

// //     let max = array[0];

// //     for(let i = 1; i < array.length; i++)
// //     if (array[i] > max)
// //     max = array[i];

// //     return max;
// // }

// //Soln#2 - Using reduce()

// function getMax(array){
//     if (array.length === 0) return undefined;

//     array.reduce((a, b) => {
//         return (a > b) ? a : b;
//     });
// }


//All movies in 2018 with rating > 4
//Sort by rating
//Descending order
//Pick title

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ]

// const result = movies.filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);

// console.log(result);

// //Function Declaration
// function walk(){
//     console.log('walk');
// }

// //Anonymous Function Expression
// let run = function(){
//     console.log('run');
// };

// run(); //Function call
// let move = run;
// move();


// walk();

// function walk(){
//     console.log('walk');
// }

// run();

// const run = function(){
//     console.log('run');
// };

// function sum(discount,...args){
//     const total = args.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// function interest(principal, rate = 3.5, years = 5){
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, 3.5, 5));

// const person = {
//     firstName: 'Nirav',
//     lastName: 'Soni',
//     fullName(){
//         return `${person.firstName} ${person.lastName}`
//     }
// };

// getters => access properties
// setters => change(mutate) them

const person = {
    firstName: 'Nirav',
    lastName: 'Soni',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = 'Hemali Soni';

console.log(person);