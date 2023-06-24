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