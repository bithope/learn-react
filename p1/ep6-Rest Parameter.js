// Rest Parameter แปลไทยว่า ส่วนที่เหลือพารามิเตอร์
    // ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...


// การสร้างฟังชั่นส่งค่า Parameter เข้าไปสองตัวคือ x และ y แล้ว return ผลรวมของ x และ y ออกไป
summation = (x, y) => {
    return x + y;
}

// การเรียกใช้งานฟังชั่น
console.log(summation(10, 20)); // 30

summation1 = (...numberArr) => {
    let total = 0;
    for( let number of numberArr) {
        total += number;
    }
    return total;
}

console.log(summation1(500, 1000, 800)); // 2300