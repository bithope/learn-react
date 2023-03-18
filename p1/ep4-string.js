// String
    // MulitLine String สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่โดยไม่มีข้อผิดผลาดเกิดขึ้นโดยใช้ `
    // Interpolation สามารถแทรกตัวแปรลงในสตริง โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `

// ทำงานกับ String แบบ MulitLine String

const address = `Bithope 123 หมู่ที่ 2 
ตำบลหนองบัว 
อำเภอบางพลี 
จังหวัดนนทบุรี`; // ปกติถ้าใช้ ' มันจะ error เมื่อต้องการแสดงผลแบบหลายบรรทัด

console.log(address);

// ทำงานกับ String แบบ Interpolation
const customerName = "นายสมชาย สมชาย";

const address2 = `${customerName} 123 หมู่ที่ 2 
ตำบลหนองบัว 
อำเภอบางพลี จังหวัดนนทบุรี`;

console.log(address2);