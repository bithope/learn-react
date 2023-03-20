// Default Parameter
// การกำหนดค่าเบื้องต้นให้กับ Parameter ใน Function // พังงา คือการ กำหนดค่าเบื้องต้นให้กับ Parameter ใน Function

getDataCustomer = (customerName, customerAddress = "พังงา") => {
  const address = `ชื่อลูกค้า : ${customerName}
  ที่อยู่ : ${customerAddress}`;
  return address;
};
// การใช้ Function
console.log(getDataCustomer("นายกฤษฎา", "กรุงเทพมหานคร"));
console.log(getDataCustomer("นายก้อง"));
// การใช้ Default Parameter
