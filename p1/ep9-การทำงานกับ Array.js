// ฟังชั่น join, concat

const data = [100, 200, 300];
console.log(data);

// การใช้ join คือ การกำหนดค่าที่อยู่ภายใน Array ใหม่ ให้อยู่ในรูปแบบ string โดยไม่กระทบต่อข้อมูลเดิม
const result = data.join(" and ");
console.log(result);

// การใช้ concat คือการต่อสมาชิกใน Array

const data1 = [100, 200, 300];
const data2 = [400, 500];

const allData = data1.concat(data2);
console.log(allData); // [100, 200, 300, 400, 500]
