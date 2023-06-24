// * Find pairs of number we can do that problems many way, but i solved that probelm in two way, One is Two Pointer method, and one is using set method
// ? Function to find pairs of numbers in an array that add up to a target value (With TwoPointers method)
function findTwoSumWithPointers(array, target) {
    const output = [];  //* for storing the results
    array.sort((a, b) => a - b); //* Sort the array in ascending order

    let left = 0; //* Left pointer
    let right = array.length - 1; //* Right pointer

    while (left < right) {
        const sum = array[left] + array[right]; //*first we are doing sum , array of left and right

        if (sum === target) {  //* If the sum is equal to the target, we found a pair, so we add it to the output array and move both pointers inward (left++ and right--).
            output.push([array[left], array[right]]); //*now it will push into the array
            left++; 
            right--;
        } else if (sum < target) { //* If the sum is less than the target, we need a larger sum, so we move the left pointer to the right (left++).
            left++; 
        } else { //* f the sum is greater than the target, we need a smaller sum, so we move the right pointer to the left (right--).
            right--;
        }
    }

    return output;
}

//! The time complexity of the updated findTwoSum function using the two-pointer approach is O(n log n), where n is the length of the input array.


// ? Function to find pairs of numbers in an array that add up to a target value (With set method)
function findTwoSumWithSet(array, target) {
    const output = []; //*  I Initialize an empty array to store the output pairs
    const set = new Set(); //*  Initialize an empty set to store the visited numbers

    for (let i = 0; i < array.length; i++) {
        const isPresent = target - array[i]; //*  Calculate the  current number

        if (set.has(isPresent)) { //* If the isPresent exists in the set, it means we have found a pair
            output.push([array[i], isPresent]);  // Add the pair to the output array
        } else {
            set.add(array[i]); //*  Add the current number to the set for future reference
        }
    }

    return output; //* return the array of pairs
}

//! The time complexity of the findTwoSumWithSet function using the set method is O(n), where n is the length of the input array.
//! This implementation has a more efficient time complexity compared to the previous implementation using the two-pointer approach, which had a time complexity of O(n log n) due to the sorting operation.


const array = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const output = findTwoSumWithSet(array, target);
console.log("First Combination For “4” : "); console.log(output);

//* Then merge the array into a single array with sorting ( ascending ) order,
const mergedArray = output.flat().sort((a, b) => a - b);
console.log("Merge Into a single Array : "); console.log(mergedArray);


// ? step double the target value and find again the combination of digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D array.
function findSubsequencesWithSum(numsArr, targetValue) {
    const result = []; // Initialize an empty array to store the subsequences
    const current = []; // Initialize an empty array to store the current subsequence
    backtrack(numsArr, targetValue, 0, current, result); // Call the backtracking function to find subsequences
    return result; // Return the array of subsequences
}

function backtrack(numsArr, targetValue, index, current, result) {
    if (targetValue === 0 && !isDuplicate(current, result)) { // If the target value is reached and the current subsequence is not a duplicate
        result.push([...current]); // Add the current subsequence to the result array
        return;
    }

    if (index === numsArr.length || targetValue < 0) { // If the index exceeds the array length or the target value becomes negative, backtrack
        return;
    }

    for (let i = index; i < numsArr.length; i++) { // Iterate through the remaining array elements
        current.push(numsArr[i]); // Add the current element to the current subsequence
        backtrack(numsArr, targetValue - numsArr[i], i + 1, current, result); // Recursively call the backtrack function with updated target value and index
        current.pop(); // Remove the current element from the current subsequence (backtrack)
    }
}

function isDuplicate(current, result) {
    for (const arr of result) { // Iterate through the result array
        if (arraysAreEqual(current, arr)) { // If the current subsequence is equal to any subsequence in the result array, it is a duplicate
            return true;
        }
    }
    return false; // Otherwise, it is not a duplicate
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) { // If the arrays have different lengths, they are not equal
        return false;
    }

    for (let i = 0; i < arr1.length; i++) { 
        if (arr1[i] !== arr2[i]) { // If any elements at the same index differ, the arrays are not equal
            return false;
        }
    }

    return true; // Otherwise, the arrays are equal
}

const numsArr = mergedArray; 
const targetValue = 8; 
const subsequences = findSubsequencesWithSum(numsArr, targetValue); // Find subsequences in the array that add up to the target value

console.log("Second Combination For “8” : "); 
console.log("[");
subsequences.forEach(subsequence => { // Iterate through the subsequences
    console.log(subsequence); // Print each subsequence
});
console.log("]");