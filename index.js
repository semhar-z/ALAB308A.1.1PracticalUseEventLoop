
// Part 1: Stack Overflow

// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

// let counter = 2;
// function increment(){
//      counter++;
//        increment();  
// }

// try {
//     increment();
//     console.log(counter);
// } catch (error) {
//     // Catch the error (stack overflow) and log the error and the counter value
//     console.error("Error occurred:", error);
//     console.log("Counter value before the error:", counter);
// }


// Part 2: Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

let nestedArray = [1,2,3, [1,3,5,7]];

function flattenArray(array){
    let result = [];

              array.forEach(item => {
            if (Array.isArray(item)) {
                // If the item is an array, flatten it and concatenate to result
                result = result.concat(flattenArray(item));
            } else {
                // If it's not an array, push the item to result
                result.push(item);
            }
        });
    
        return result;
    }
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);


function trampoline(fn) {
    return function(...args) {
        let result = fn(...args);
        while (typeof result === "function") {
            result = result();
        }
        return result;
    };
}


// Trampolined version of flattenArray
function flattenArrayTrampoline(array2) {
    function flatten(array2, flatArray = []) {
        return function() {
            if (array2.length === 0) {
                return flatArray; // Base case: return the accumulated result
            }

            const [first, ...rest] = array2;

            if (Array.isArray(first)) {
                return flatten(first.concat(rest), flatArray); // Recursively flatten the first element
            } else {
                return flatten(rest, flatArray.concat(first)); // Add non-array element to accumulator
            }
        };
    }

    return trampoline(flatten)(array2);
}

let flattenedArray2 = flattenArrayTrampoline(nestedArray);
console.log(flattenedArray2);