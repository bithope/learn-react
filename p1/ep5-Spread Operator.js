// Spread Operator
    // ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร Array

// การใช้งาน Spread Operator

const newArr = [100, 200, 300];
const data = [10, 20, ...newArr];

console.log(data); // [10, 20, 100, 200, 300]
console.log(data.length); // 5


const colors = ['red', 'green', 'blue'];
const allColors = ['gold', 'gray', ...colors];

const newColors = ['black', 'white'];
allColors.push(...newColors);
console.log(allColors); // ['gold', 'gray', 'red', 'green', 'blue', 'black', 'white']