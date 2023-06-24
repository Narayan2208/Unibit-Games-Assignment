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
