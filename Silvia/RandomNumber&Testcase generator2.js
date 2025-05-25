// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//testcase template
// type: ++ (both positive), +- (one negative), --(both negative), zero
//sort: ASC lower number first, DSC: higher number first, zero: 0 last, "": no sort
/*const testcases = {
  test1: { min: 0, max: 100, type: "++", sort: "ASC", operator: "plus" },
};*/

function generateTestData(testcase) {
  testData = {};
  testData.operator = testcase.operator;
  rawnumber = [];
  for (let i = 0; i < 2; i++) {
    rawnumber[i] = getRandomInt(testcase.min, testcase.max);
    console.log(rawnumber);
  }
  switch (testcase.type) {
    case "++":
      break;

    case "+-":
      rawnumber[1] = -rawnumber[1];
      break;
    case "--":
      rawnumber[0] = -rawnumber[0];
      rawnumber[1] = -rawnumber[1];
      break;
    case "zero":
      rawnumber[1] = 0;
      break;
    default:
      console.log("Unknown type.");
      break;
  }

  switch (true) {
    case testcase.sort === "zero":
      testData.input1 = rawnumber[0];
      testData.input2 = rawnumber[1];
      break;
    case testcase.sort === "ASC" && rawnumber[0] <= rawnumber[1]:
      testData.input1 = rawnumber[0];
      testData.input2 = rawnumber[1];
      break;
    case testcase.sort === "DSC" && rawnumber[0] <= rawnumber[1]:
      testData.input1 = rawnumber[1];
      testData.input2 = rawnumber[0];
      break;
    case testcase.sort === "ASC" && rawnumber[0] > rawnumber[1]:
      testData.input1 = rawnumber[1];
      testData.input2 = rawnumber[0];
      break;
    case testcase.sort === "DSC" && rawnumber[0] > rawnumber[1]:
      testData.input1 = rawnumber[0];
      testData.input2 = rawnumber[1];
      break;
  }

  switch (testcase.operator) {
    case "plus":
      testData.expected = testData.input1 + testData.input2;
      break;
    case "minus":
      testData.expected = testData.input1 - testData.input2;
      break;
    case "times":
      testData.expected = testData.input1 * testData.input2;
      break;
    case "divide":
      if (testData.input2 == 0) {
        testData.expected = "Division my Zero is illegal";
      } else {
        testData.expected = testData.input1 / testData.input2;
      }
  }
  return testData;
}

