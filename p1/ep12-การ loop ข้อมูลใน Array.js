// การ loop Arrays
// For loop, ForEach, for of

// For loop
const data = [10, 20, 30, 40, 50];
for (let index = 0; index < data.length; index++) {
  // กำหนดให้ index เท่ากับ 0 ; เช็ค index น้อยกว่าจำนวนข้อมูลใน data หรือไม่ ถ้าน้อยกว่า ; ให้ index +1
  if (data[index] >= 40) break; // break continue
  console.log(data[index]);
  console.log(`ลำดับที่ ${index} = ${data[index]}`);
}

// ForEach ไม่สามารถใช้ break continue ได้ แต่สามารถใช้ if แทรกได้
const data1 = [10, 20, 30, 40, 50];

data1.forEach((element) => {
  // element คือสามาชิกใน array data1
  if (element >= 30) {
    console.log("Hello Bithop");
  }
  console.log(element);
  console.log(`สมาชิกใน array data1 = ${element}`);
});

// การใช้ forEach หาผลรวมใน Array
let sum = 0;
const data2 = [10, 20, 30, 40, 50];
data2.forEach((element2) => {
  sum += element2; // sum = sum + element2
  console.log(`ผลรวมใน array data2 = ${sum}`);
});

// การใช้ for of สามารถใช้ break continue ได้  : for(of)
const data3 = [10, 20, 30, 40, 50];
for (let element3 of data3) {
  if (element3 >= 30) break;
  console.log(`สามาชิก array data3 = ${element3}`);
}
