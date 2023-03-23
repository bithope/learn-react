// การค้นหาข้อมูลใน Array
// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจออะไรจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจออะไรจะได้ undefined
// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจออะไรจะได้ -1

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"];
const index = colors.indexOf("ขาว");
console.log(index);

const search = colors.find(element => element === "ขาว");
console.log(search);

const searchIndex = colors.findIndex(element => element === "ม่วง");
console.log(searchIndex);