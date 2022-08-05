/*
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/
// ===================================================================== //

function findOddSum() {
    const numbers = [5, 7, 8, 10, 45, 30];
    let oddNum = [];
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        if (numbers[i] % 2 !== 0) {
            oddNum.push(numbers[i])
            // console.log(numbers[i])
        }
    }
    return oddNum;
}
const oddNum1 = findOddSum();
console.log(oddNum1);