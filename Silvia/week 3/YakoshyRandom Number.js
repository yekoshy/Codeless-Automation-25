// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//yakoshy testcases
const testcases = {
  test2: { min: 0, max: 100, type: "++", sort: "ASC", operator: "Add (+)" },
  test3: { min: 0, max: 100, type: "+-", sort: "ASC", operator: "Add (+)" },
  test3a: { min: 0, max: 100, type: "+-", sort: "DSC", operator: "Add (+)" },
  test4: { min: 0, max: 100, type: "--", sort: "ASC", operator: "Add (+)" },
  test5: {
    min: 0,
    max: 100,
    type: "++",
    sort: "ASC",
    operator: "Multiply (*)",
  },
  test6: {
    min: 0,
    max: 100,
    type: "+-",
    sort: "ASC",
    operator: "Multiply (*)",
  },
  test6a: {
    min: 0,
    max: 100,
    type: "+-",
    sort: "DSC",
    operator: "Multiply (*)",
  },
  test7: {
    min: 0,
    max: 100,
    type: "--",
    sort: "ASC",
    operator: "Multiply (*)",
  },
  test8: {
    min: 0,
    max: 100,
    type: "zero",
    sort: "zero",
    operator: "Multiply (*)",
  },
  test9: { min: 0, max: 100, type: "++", sort: "ASC", operator: "Divide (/)" },
  test10: { min: 0, max: 100, type: "++", sort: "DSC", operator: "Divide (/)" },
  test11: { min: 0, max: 100, type: "+-", sort: "ASC", operator: "Divide (/)" },
  test12: { min: 0, max: 100, type: "+-", sort: "DSC", operator: "Divide (/)" },
  test13: { min: 0, max: 100, type: "--", sort: "ASC", operator: "Divide (/)" },
  test14: { min: 0, max: 100, type: "--", sort: "DSC", operator: "Divide (/)" },
  test15: {
    min: 0,
    max: 100,
    type: "zero",
    sort: "zero",
    operator: "Divide (/)",
  },
  test16: {
    min: 0,
    max: 100,
    type: "++",
    sort: "DSC",
    operator: "Subtract (-)",
  },
  test17: {
    min: 0,
    max: 100,
    type: "++",
    sort: "ASC",
    operator: "Subtract (-)",
  },
  test18: {
    min: 0,
    max: 100,
    type: "--",
    sort: "DSC",
    operator: "Subtract (-)",
  },
  test19: {
    min: 0,
    max: 100,
    type: "--",
    sort: "ASC",
    operator: "Subtract (-)",
  },
  test22: {
    min: 100000,
    max: 1000000,
    type: "++",
    sort: "ASC",
    operator: "Subtract (-)",
  },
  test22A: {
    min: 100000,
    max: 1000000,
    type: "++",
    sort: "ASC",
    operator: "Add (+)",
  },
  test22B: {
    min: 100000,
    max: 1000000,
    type: "++",
    sort: "ASC",
    operator: "Divide (/)",
  },
  test22C: {
    min: 100000,
    max: 1000000,
    type: "++",
    sort: "ASC",
    operator: "Multiply (*)",
  },
};

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
    case "Add (+)":
      testData.expected = testData.input1 + testData.input2;
      break;
    case "Subtract (-)":
      testData.expected = testData.input1 - testData.input2;
      break;
    case "Multiply (*)":
      testData.expected = testData.input1 * testData.input2;
      break;
    case "Divide (/)":
      if (testData.input2 == 0) {
        testData.expected = "Division my Zero is illegal";
      } else {
        testData.expected = testData.input1 / testData.input2;
      }
  }
  return testData;
}