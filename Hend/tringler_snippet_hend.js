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

function TestTriangle({side1, side2, side3, expectedDescription}) {
  document.querySelector("#side1").value = side1;
  document.querySelector("#side2").value = side2;
  document.querySelector("#side3").value = side3;
     
  clickButton("identify-triangle-action");

 
    console.assert(
          document.getElementById('triangle-type').textContent === expectedDescription,
              'Expected text to be ' + expectedDescription
);

    
}

const testCases = [
  {
    side1: "5", side2: "5", side3: "5",
    expectedDescription: "Equilateral Triangle"
  },
  {
    side1: "5", side2: "6", side3: "7",
    expectedDescription: "Scalene Triangle"
  },
  {
    side1: "5", side2: "5", side3: "7",
    expectedDescription: "Isosceles Triangle"
  },
  {
    side1: "-1", side2: "7", side3: "9",
    expectedDescription: "Not a Triangle"
  },
  {
    side1: "e", side2: "7", side3: "9",
    expectedDescription: "Not a Triangle"
  },
  {
    side1: "0", side2: "7", side3: "9",
    expectedDescription: "Not a Triangle"
  },
  {
    side1: "0", side2: "0", side3: "0",
    expectedDescription: "Not a Triangle"
  }
];
 
 document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("body > div.page-body > div.centered > div.triangle-canvas-container");
  if (!container) {
    console.assert(false, "❌ FAIL: No container for triangle image found");
  } else {
    const img = container.querySelector("img");
    if (img) {
      console.assert(true, "✅ PASS: Triangle image displayed");
    } else {
      console.assert(false, "❌ FAIL: No triangle image displayed");
    }
  }

  testCases.forEach(test => TestTriangle(test));
});
