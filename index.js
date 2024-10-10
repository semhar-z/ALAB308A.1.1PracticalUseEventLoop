
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


// Part 3: Deferred Execution

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// Once complete, use the alert() method to alert the user that the calculation is finished.

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function addPrimeNumToHTMLEl(n){

    const isPrimeText = document.getElementById('textPrimeHolder1'); // Cache the HTML element
    const ul = document.createElement('ul'); // Create a list element

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            const li = document.createElement('li'); // Create a list item for each prime
            li.textContent = i; // Set the text to the prime number
            ul.appendChild(li); // Add the list item to the list
        }
    }

     isPrimeText.appendChild(ul); // Add the list to the cached div

      // Alert the user when the calculation is complete
    alert('Prime number calculation is finished!');

    
}

addPrimeNumToHTMLEl(15); 


//  modify your function such that each number has an opportunity to render after it is calculated, 
//  and the alert only appears once all numbers have been rendered


function addPrimeNumToHTMLElWithSetTime(n, current = 2){

    const isPrimeText2 = document.getElementById('textPrimeHolder2'); // Cache the HTML element
    // const ul = document.createElement('ul'); // Create a list element

    if (current > n) {
        alert('Prime number listing is finished!');
        return;
    }

    // Check if current is prime and append it to the parent node it
    if (isPrime(current)) {
        const li = document.createElement('li');
        li.textContent = current;
        isPrimeText2.appendChild(li);
    }

    // Use setTimeout to defer execution for the next number
    setTimeout(() => {
        addPrimeNumToHTMLElWithSetTime(n, current + 1); // Call for the next number
    }, 0);

  }

addPrimeNumToHTMLElWithSetTime(10000);
