// Array Map
// การนำค่าสมาชิกใน array มาทำการ map หรือเปลี่ยนแปลงค่า แล้วสร้างเป็น array ก้อนใหม่มาใช้งาน

const numbers = [10, 20, 30, 40];
const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers);

const newNumbers2 = numbers.map((num) => num * num);
console.log(newNumbers2);

// การใช้ map ร่วมกับ loop และข้อความ
const data = ["ฝนตก", "แดดร้อน", "ฝนฟ้าคะนอง", "แดดร้อน", "ฝนตก", "อากาศดี", "หมอก"];

const result = data.map((element, i) => {
  return `วันที่ ${i + 1} สภาพอากาศ ${element}`;
});
console.log(result);

// การใช้ map ร่วมกับ object

const data2 = [
  { day: "01/01/2022", weather: "แดดร้อน", temperature: 27 },
  { day: "02/01/2022", weather: "ฝนตก", temperature: 23 },
  { day: "03/01/2022", weather: "หมอก", temperature: 22 },
];

const result1 = data2.map((element) => {
  return element.weather;
});
console.log(result1);

// หรือเขียนให้สั้น
const result2 = data2.map((element) => element.day);

console.log(result2);
