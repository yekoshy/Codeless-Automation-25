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
function CheckInput(values) {
    
    for (i=0; i<values.length;i++) {
        //giving each input
        document.querySelectorAll("input[type=text]")[0].value = values[i][0]
        //click Check
        document.querySelector("input[type=button]").click()
        //check each output
        console.log(values[i][0])
        console.assert(document.querySelectorAll("input[type=text]")[1].value==values[i][1], "Expected:"+values[i][1]+",Actual:"+document.querySelectorAll("input[type=text]")[1].value);
        
    }
}
CheckInput(values)
