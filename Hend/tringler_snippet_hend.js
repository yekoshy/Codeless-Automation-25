//document.querySelector("#triangle-form > label:nth-child(1)")
//document.querySelector("#side1")
//document.querySelector("#triangle-form > label:nth-child(5)")
//document.querySelector("#side2")
//document.querySelector("#triangle-form > label:nth-child(9)")
//document.querySelector("#side3")
//document.querySelector("#identify-triangle-action") // button id
//document.querySelector("#triangle-type") lable of type
//document.querySelector("body > div.page-body > div.centered > div.triangle-canvas-container")

function clickButton(buttonID) {
  const btn = document.getElementById(buttonID);
  if (btn) btn.click();
  else console.warn(`Button with id "${buttonID}" not found.`);
}
//function TestTriangle(case) {
function TestTriangle({side1, side2, side3, expectedDescription}) {
  document.querySelector("#side1").value = side1;
  document.querySelector("#side2").value = side2;
  document.querySelector("#side3").value = side3;
     
  clickButton("identify-triangle-action");

 
    console.assert(
          document.getElementById('triangle-type').textContent === expectedDescription,
              'Expected text to be ' + expectedDescription
);

  const container = document.querySelector("body > div.page-body > div.centered > div.triangle-canvas-container");
  if (!container) {
    console.assert(false, "❌ FAIL: No container for triangle image found");
  } 
    
}

const testCases = [
  {
    side1: "5", side2: "5", side3: "5",
    expectedDescription: "Equilateral"
  },
  {
    side1: "5", side2: "6", side3: "7",
    expectedDescription: "Scalene"
  },
  {
    side1: "5", side2: "5", side3: "7",
    expectedDescription: "Isosceles"
  },
  {
    side1: "-1", side2: "7", side3: "9",
    expectedDescription: "Error: Not a Triangle"
  },
  {
    side1: "e", side2: "7", side3: "9",
    expectedDescription: "Error: Side 1 is not a Number"
  },
  {
    side1: "0", side2: "7", side3: "9",
    expectedDescription: "Error: Not a Triangle"
  },
  {
    side1: "0", side2: "0", side3: "0",
    expectedDescription: "Error: Not a Triangle"
  }
];

 testCases.forEach(test => TestTriangle(test));
