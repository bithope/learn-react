// ฟังชั่น splice และ slice
// splice เป็นการลบข้อมูลที่ต้องการออกจากข้อมูลที่อยู่ในรูปแบบของ Array splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, ตำแหน่งที่จะเพิ่ม)
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)

const data = [10, 20, 30, 40, 50];
console.log(data);
data.splice(1, 3, 999);
console.log(data);

const data2 = [10, 20, 30, 40, 50, 60];
console.log(data2);
lastdata = data2.slice(2, 4);
console.log(lastdata); // [30, 40]