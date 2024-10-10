
// Part 1: Stack Overflow

// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 2;
function increment(){
     counter++;
       increment();  
}

try {
    increment();
    console.log(counter);
} catch (error) {
    // Catch the error (stack overflow) and log the error and the counter value
    console.error("Error occurred:", error);
    console.log("Counter value before the error:", counter);
}


// Part 2: Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

let array = [1,2,3, [1,3,5,7]];

function flatten(){
    let result = [];

}
