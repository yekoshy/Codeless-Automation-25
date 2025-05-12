//test values
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
  ["iujgt567", "Invalid Value"],
];

//define const for input elements

//let inputField = ;
//let resultField = document.querySelectorAll("input[type=text]")[1]; //add.value when using it
//const checkButton = ; // add .click();

function checkInput(values) {
  for (let i = 0; i < values.length; i++) {
    document.querySelectorAll("input[type=text]")[0].value = values[i][0];
    document.querySelector("input[type=button]").click();
    console.log('Testing Data:' + values[i][0] )
    console.assert(document.querySelectorAll("input[type=text]")[1].value === values[i][1],`Expected: ${values[i][1]} ,Actual: ${document.querySelectorAll("input[type=text]")[1].value}`);
  }
}


checkInput(values)