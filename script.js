/* Start Task 2 */
function CalculateNumbers (numbers) {
    const totalSum = numbers.reduce((prev , curr) => prev + curr , 0);
    const average = totalSum / numbers.length ;

    return {totalSum , average} ; 
    
};

// Example :
const numbers =[1,2,3,4,5,6,7,8,9,10];
const result = CalculateNumbers (numbers);
console.log(result.totalSum);
console.log(result.average);

/* End Task 2 */


/* Start Task 3 */

function RemovesAllDuplicates (words){
    return Array.from(new Set (words));
};

//Example
const words=["Ahmad","Ali","Omar","Ali"];
const newArray = RemovesAllDuplicates (words);
console.log(newArray)

/* End Task 3 */


