console.log("Hello world");

let courseArray = ["Javascript", "CPAN-113", "Humber", "Programming", 2024];

console.log(courseArray);
let firstItem = courseArray[0];

console.log(firstItem);
let lastItem = courseArray[4];

console.log(lastItem);
let middleItem = courseArray[2];

console.log(middleItem);
let arrayLength = courseArray.length;

console.log(arrayLength);
let removeItem = courseArray.pop(); //removes the last item from the arrayconsole.log(courseArray);

let addItem = courseArray.push("Computing"); //adds an item to the arrayconsole.log(courseArray);

let removeFirstItem = courseArray.splice(0, 1); //used to remove the first item in the arrayconsole.log(removeFirstItem);
console.log(courseArray); //printing out the array for comparison

let modifyArray = courseArray.splice(0, 1, "Course"); //using splice to remove and add a first item in the arrayconsole.log(modifyArray); //returns an array
console.log(courseArray); //printing out the array for comparison

let unshiftArray = courseArray.unshift("September", "Commencement"); //using unshift to add two items to the arrayconsole.log(unshiftArray); //returns count of array items
console.log(courseArray); //returns array items

courseArray.forEach(printFunction); //takes a function as parameter

function printFunction(value) {
  console.log(value + "s");
}

for (i = 0; i < courseArray.length; i++) {
  console.log(courseArray[i]);
}

//Destructuring the array
let [first, second, ...rest] = courseArray;
console.log(first); //returns first item from array which is Septemberconsole.log(second);
console.log(second); //returns second item from array which is Commencementconsole.log(courseArray);

console.log(courseArray);
