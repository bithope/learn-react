// Arrow Function

// แบบเดิม
function fullName(fName, lName) {
  return fName + lName;
}

// การเรียกใช้งานฟังชั่น
console.log(fullName("John", "Doe"));

// แบบใหม่ ถ้ามีคำสั่งเยอะ
fullName1 = (fName, lName) => {
  return fName + lName;
};
console.log(fullName1("John1", "Doe1"));

// แบบใหม่ ถ้ามีคำสั่งน้อย
fullName2 = (fName, lName) => fName + lName;

console.log(fullName2("John2", "Doe2"));

// ยกตัวอย่าง
setAge = (age) => "อายุ = " + age;

// แบบดั้งเดิม
function setAge1(age) {
  return "อายุ = " + age;
}
console.log(setAge(20));
console.log(setAge1(20));
