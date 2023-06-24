function findTwoSum(array, target) {
    const output = [];
    const set = new Set();

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (set.has(complement)) {
            output.push([array[i], complement]);
        } else {
            set.add(array[i]);
        }
    }

    return output;
}

const array = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const output = findTwoSum(array, target);
console.log("First Combination For “4” : "); console.log(output);


const mergedArray = output.flat().sort((a, b) => a - b);
console.log("Merge Into a single Array : "); console.log(mergedArray);


