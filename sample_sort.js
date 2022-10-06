const nameArray = ['John', 'Paul', 'George', 'Ringo'];
const sortedArray = nameArray.sort();
console.log(sortedArray);

const numberArray = [1, 2, 10, 20];

const sortedNumberArray = numberArray.sort((a, b) => {
    return -1;
});
console.log(sortedNumberArray);