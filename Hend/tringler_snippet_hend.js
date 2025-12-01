//document.querySelector("#triangle-form > label:nth-child(1)")
//document.querySelector("#side1")
//document.querySelector("#triangle-form > label:nth-child(5)")
//document.querySelector("#side2")
//document.querySelector("#triangle-form > label:nth-child(9)")
//document.querySelector("#side3")
//document.querySelector("#identify-triangle-action") // button id
//document.querySelector("#triangle-type") lable of type
//document.querySelector("body > div.page-body > div.centered > div.triangle-canvas-container")
const testCases = [
  [5, 5, 5, 'equilateral'],
  [5, 5, 3, 'isosceles'],
  [3, 4, 5, 'scalene'],

  [1, 1, 1, 'equilateral'],
  [2, 2, 3, 'isosceles'],
  [2, 3, 4, 'scalene'],

  [2, 3, 5, 'not a triangle'],
  [2, 3, 6, 'not a triangle'],
  [10, 1, 1, 'not a triangle'],

  [0, 0, 0, 'not a triangle'],
  [0, 5, 5, 'not a triangle'],
  [-1, 5, 5, 'not a triangle'],
  [5, -1, 5, 'not a triangle'],
  [5, 5, -1, 'not a triangle'],

  [1000000, 1000000, 1000000, 'equilateral'],
  [999999, 1000000, 1000000, 'isosceles'],
  [999998, 999999, 1000000, 'scalene'],
];

async function setInput(id, value) {
  const el = document.getElementById(id);
  el.value = "";
  el.value = value;
}

async function runTriangleTest(a, b, c, expected) {
  await setInput("side1", a);
  await setInput("side2", b);
  await setInput("side3", c);

  document.getElementById("identify-triangle-action").click();

  // Wait for result to update
  await new Promise(r => setTimeout(r, 200));

  const result = document.getElementById("triangle-type").innerText.toLowerCase();
  const passed = result.includes(expected);

  console.log(
    passed
      ? `✔ PASS — sides (${a}, ${b}, ${c}) → expected "${expected}", got "${result}"`
      : `✘ FAIL — sides (${a}, ${b}, ${c}) → expected "${expected}", got "${result}"`
  );

  return passed;
}

async function runAllTests() {
  console.log("===== Triangle Tests (Chrome Snippet) =====");
  let passed = 0;

  for (const [a, b, c, expected] of testCases) {
    const ok = await runTriangleTest(a, b, c, expected);
    if (ok) passed++;
  }

  console.log(`\nCompleted: ${passed}/${testCases.length} tests passed`);
  console.log("==========================================");
}

// Ensure you are on the Triangle App page
if (location.href.includes("triangle")) {
  runAllTests();
} else {
  console.warn(
    "❗ Open this page first:\nhttps://testpages.eviltester.com/apps/triangle/\nThen re-run the snippet."
  );
}
