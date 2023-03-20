// ฟังชั่่น push, pop, shift, unshift

// push คือ เพิ่มข้อมูลใน Array ที่ตำแหน่งท้ายสุด
const data = [10, 20, 30];
console.log(data);
data.push(...[400, 500, 600]);
console.log(data);

// pop คือ ลบข้อมูลที่อยู่ใน Array ที่ตำแหน่งท้ายสุด
data.pop();
console.log(data);

// shift คือ ลบข้อมูลที่เริ่มต้นของ Array
data.shift();
console.log(data);

// unshift คือ เพิ่มข้อมูลที่เริ่มต้นของ Array
data.unshift(100);
console.log(data);