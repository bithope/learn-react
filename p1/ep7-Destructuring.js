// Destructuring แปลไทยว่า การสลายโครงสร้าง
// การกำหนดค่าที่อยู่ภายใน Array หรือ Object ให้กับตัวแปรโดยใช้ววิธีการจับคู่ตัวแปรกับค่าใน array หรือ object

// Array
const colors = ["green", "red", "yellow"];
const green = colors[0];
const red = colors[1];
const yellow = colors[2];

// การใช้ Destructuring
const colors1 = ["green", "red", "yellow"];
const [green1, red1, yellow1] = colors1; // ใช้ [] การกำหนดค่าที่อยู่ภายใน Array

console.log(green);
console.log(red);
console.log(yellow);
//
console.log(green1);
console.log(red1);
console.log(yellow1);

// Object
const product = {
  productname: "mouse",
  price: 100,
  stock: 10,
};

// การใช้ Destructuring
const { productname, price, stock } = product; // ใช้ {} การกำหนดค่าที่อยู่ภายใน Object
console.log(productname);
console.log(price);
console.log(stock);
