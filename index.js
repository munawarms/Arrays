// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits); 

// Method 2: Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); 

// Method 3: Creating an empty array
let emptyArray = [];
console.log(emptyArray); 

// Arrays can hold different types of data
let mixedArray = ["hello", 42, true, "world"];
console.log(mixedArray); 

let colors = ["red", "green", "blue", "yellow"];


console.log(colors[0]); 
console.log(colors[1]); 
console.log(colors[2]); 
console.log(colors[3]); 

//  length of an array
console.log(colors.length); 

// Getting the last item
console.log(colors[colors.length - 1]); 

// push method

let animal = ["cat", 'ant'];

console.log(animal);
animal.push("fish");
animal.push("dog");

// unshift method add new item on first index

animal.unshift("cammale");
console.log(animal)

animal[5]="rabbit"
console.log(animal);

animal.push("cow","baffellow");
console.log(animal);
// pop method
// pop last item
animal.pop();
console.log(animal);
// pop first item
animal.shift();
console.log(animal);

// index find
console.log(animal.indexOf("cow"));
console.log(animal.indexOf("ant"));

//check item exists or not

console.log(animal.includes("dog"));
console.log(animal.includes("lion"));

// concatination merging arrays

let bird =["cat","lion"];
console.log(bird);
let fruit = ["apple","grapes"]
console.log(fruit)
let arraysMerging = bird.concat(fruit);
console.log(arraysMerging)

