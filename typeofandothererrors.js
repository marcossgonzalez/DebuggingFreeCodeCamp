//-----------------------------------------------------
/*Você pode usar typeof para verificar a estrutura de dados, ou tipo, de uma variável. 
Isso é útil na depuração ao trabalhar com vários tipos de dados.*/
//-----------------------------------------------------
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);
//-----------------------------------------------------
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
//-----------------------------------------------------
let myArray = [1, 2, 3];
let previous = 2.5;
let arraySum = myArray.reduce((previous, current =>  previous + current));
console.log(`Sum of array values is: ${arraySum}`);
//-----------------------------------------------------
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
//-----------------------------------------------------