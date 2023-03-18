// ทำงานกับ Obaect

// ตัวแปรเก็บข้อมูลในรูปแบบ Object แบบเดิม
const customer = {
    customerName: "Bithope",
    age: 25,
    address: "Phangnga"
};

console.log(customer);


// ตัวแปรเก็บข้อมูล
const userName = "Bithope";
const age = 25;
const address = "Phangnga";

// การเขียนคำสั่งในรูปแบบ Object
const customer1 = {
    customerName: userName,
    age: age,
    address: address
};

console.log(customer1);

// การเขียนคำสั่งในรูปแบบ Object ในกรณีชื่อ property และชื่อของตัวแปรเหมือนกัน
const customer2 = {
    userName,
    age,
    address
};
console.log(customer2);

// การเขียนคำสั่งในรูปแบบ Object แบบบรรทัดเดียวในกรณีมีข้อมูลไม่เยอะ
const customer3 = {userName, age, address};
console.log(customer3);