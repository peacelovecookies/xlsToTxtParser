const excelToObj = require('convert-excel-to-json');
const fs = require('fs');

const files = fs.readdirSync('../quizes'); 
console.log('test: ', files);

// const result = excelToObj({
//     sourceFile: 'Economics осон, урта кийин.xls',
// });

// // result = {
// //     'sheetName': [{A:'value'},{B:'value'}...],
// //     'sheetName2': [{A:'value'},{B:'value'}...]
// // }


// reading all files in some directory
// 1. read directory (../quizes) => ['fileName1.ext', 'fileName2.ext']
// 2. iterate via cycly through array of files
// 3. create directory (../quizesTxt/fileName) by splitting fileName and taking first part
// 4. parse document (file) by '../quizes/fileName.ext'

// parsing
// 1. parse Excel file
// 2. get result's keys => [key1, key2, key3]
// 3. use cycle to handle each list => result[listName] == [{}, {}]
// 4. use map and convert each row into string which represents one question+its_options => {} into "string" following template in TR => ['question1/options', 'question2/options']
// 5. use join to join all questions into one final string => 'all questions'

// writting files
// 1. create file.txt (add into our dir)
// 2. write into file.txt


const {
    B: question , 
    D: correctAnswer,
    E: opt1,
    F: opt2,
    G: opt3,
    H: opt4 } = result['Осон'][1];

    const lettersDict = {
        0: '',
        1: 'a)',
        2: 'b)',
        3: 'c)',
        4: 'd)'
    };

const arrWithRightOpt = [question, opt1, opt2, opt3, opt4].map((el, i) => i === correctAnswer ? `*${lettersDict[i]}${el}` : `${lettersDict[i]}${el}`);
console.log('test: ', arrWithRightOpt.join('\n'));