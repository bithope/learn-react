// Array Reduce
    // การนำเอาค่าข้อมูลใน Array มาทำอะไรบางอย่าง จะได้ค่าๆ ตอบกลับออกไปใช้งาน

// ทบทวน map filter
const data = [10, 20, 30, 40];
const result = data.map(e=>e*2);
console.log(result); // [20, 40, 60, 80]
const dataFilter = data.filter(e=>e>20);
console.log(dataFilter); // [30, 40]

// การใช้งาน reduce array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)  // value = 0
const data1 = [10, 20, 30, 40];
data1.reduce((value,e)=>{
    const total = e+value;
    return total;
},0)