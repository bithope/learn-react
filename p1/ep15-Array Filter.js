// Array Filter
// การคัดกรอง Array จะเก็บผลการกรองออกมาเป็น array ก้อนใหม่
const data = [10, 20, 30, 40];
const result = data.filter((e) => {
  return e > 20;
});
console.log(result);

// เขียนให้สั้นลง
const data1 = [10, 20, 30, 40];
const result1 = data1.filter((e) => e > 20);
console.log(result1);

// การทำงานกับ object
const data2 = [
  { uname: "สมชาย", salary: 1000, department: "กรรมการ" },
  { uname: "สมใจ", salary: 1500, department: "โปรแกรมเมอร์" },
  { uname: "สมศักดิ์", salary: 2000, department: "การบิน" },
  { uname: "สมคิด", salary: 1500, department: "ภารโรง" },
  {uname: "สมจิตร", salary: 2000, department: "ประธาน" },
];

const filter1 = data2.filter(e =>{
  return e.department === "กรรมการ";
})
console.log(filter1);

// เขียนให้สั้นลง และซ้อน Filter
const filter2 = data2.filter(e => e.salary > 1500).filter(e => e.department === "การบิน");
console.log(filter2);