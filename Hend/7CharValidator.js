document.querySelectorAll("input[type=text]")[0].value
document.querySelectorAll("input[type=text]")[1].value
document.querySelector("input[type=button]").click()
  
 const values = [
  ["9999999", "Valid Value"],
  ["#$%^#", "Invalid Value"],
  ["hendd**", "Valid Value"],
  ["AHYEDIO", "Valid Value"],
  ["jdtegdj", "Valid Value"],
  ["3705490", "Valid Value"],
  ["ASHFbnj", "Valid Value"],
  ["hye76BG", "Valid Value"],
  ["23BgbG*", "Valid Value"],
  ["gyr$%8N", "Invalid Value"],
  ["bhtr50", "Invalid Value"],
  ["", "Invalid Value"],
  ["huy bh", "Invalid Value"],
  ["^kn8uhg", "Invalid Value"],
  ["iujgt567", "Invalid Value"]
];
const input1 = document.querySelectorAll("input[type=text]")[0];
const input2 = document.querySelectorAll("input[type=text]")[1];
const input1Value = input1.value;
const input2Value = input2.value;


const validValues = values.filter(value => value[1] === "Valid Value").map
 (value => value[0]);

 //Create for loop 
//Each value to be written inside input1 
// click button 
// Read inpu2 
//Assert value Valid 

//Create the same for invalid

console.log("Valid Values:");
console.log(validValues);

const button = document.querySelector("input[type=button]");
button.click(); 