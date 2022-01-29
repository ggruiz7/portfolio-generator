const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log("Portfolio Created! Check index.html for the output!");
});
































// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // this...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     // is the same as this...
//     profileDataArr.forEach(profileItem =>
//         console.log(profileItem)
//     );

// }

// printProfileData(profileDataArgs);

// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(5, 3);
// console.log(sum);