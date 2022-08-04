/*
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
*/
// ====================================================================== //

function findLeapYear() {
    const year = [2023, 2024, 2025, 2028, 2030];
    let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        if (year[i] % 4 === 0) {
            leapYear.push(year[i])
            // console.log(year[i], "This is leap year")
        }
    }
    return leapYear;
    // console.log(leapYear)
}
const leapYear1 = findLeapYear();
console.log(leapYear1)