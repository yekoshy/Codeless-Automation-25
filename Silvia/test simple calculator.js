//set input element identifiers
const input1 = document.querySelector('#number1');

const input2 = document.querySelector('#number2');

const functionSelector = document.querySelector('#function');

const calcButton = document.querySelector('#calculate');

const answer = document.querySelector('#answer');

//tets case definitions

const testcases = {
  test2: { min: 0, max: 100, type: "++", sort: "ASC", operator: "plus" },
  test3: { min: 0, max: 100, type: "+-", sort: "ASC", operator: "plus" },
  test3a: { min: 0, max: 100, type: "+-", sort: "DSC", operator: "plus" },
  test4: { min: 0, max: 100, type: "--", sort: "ASC", operator: "plus" },
  test5: { min: 0, max: 100, type: "++", sort: "ASC", operator: "times" },
  test6: { min: 0, max: 100, type: "+-", sort: "ASC", operator: "times" },
  test6a: { min: 0, max: 100, type: "+-", sort: "DSC", operator: "times" },
  test7: { min: 0, max: 100, type: "--", sort: "ASC", operator: "times" },
  test8: { min: 0, max: 100, type: "zero", sort: "zero", operator: "times" },
  test9: { min: 0, max: 100, type: "++", sort: "ASC", operator: "divide" },
  test10: { min: 0, max: 100, type: "++", sort: "DSC", operator: "divide" },
  test11: { min: 0, max: 100, type: "+-", sort: "ASC", operator: "divide" },
  test12: { min: 0, max: 100, type: "+-", sort: "DSC", operator: "divide" },
  test13: { min: 0, max: 100, type: "--", sort: "ASC", operator: "divide" },
  test14: { min: 0, max: 100, type: "--", sort: "DSC", operator: "divide" },
  test15: { min: 0, max: 100, type: "zero", sort: "zero", operator: "divide" },
  test16: { min: 0, max: 100, type: "++", sort: "DSC", operator: "minus" },
  test17: { min: 0, max: 100, type: "++", sort: "ASC", operator: "minus" },
  test18: { min: 0, max: 100, type: "--", sort: "DSC", operator: "minus" },
  test19: { min: 0, max: 100, type: "--", sort: "ASC", operator: "minus" },
  test22: {min: 100000, max: 1000000, type: "++", sort: "ASC", operator: "minus"},
  test22A: {min: 100000, max: 1000000, type: "++", sort: "ASC", operator: "plus"},
  test22B: { min: 100000, max: 1000000, type: "++", sort: "ASC", operator: "divide"},
  test22C: {min: 100000, max: 1000000, type: "++", sort: "ASC", operator: "times"},
};



function runTest (testcase){
    console.log('runTest started');
    console.log(testcase);
    input1.value = testcase.input1;
    
    input2.value = testcase.input2;
    
    functionSelector.value = testcase.operator;
    
    calcButton.click();
    console.log('button clicked')
    console.assert(testcase.expected == answer.innerText, `Expected: ${testcase.expected}, Actual ${answer.innerText}`);
}

//loop through all numerical testcases
//basically works but the large number testcases crash 
/*let testIDs = Object.keys (testcases);
testIDs.forEach (testID => {
  console.log (testID);
let currentRaw= testcases[testID]
  console.log(currentRaw);
  //call actual test function
  let currentTest= generateTestData(currentRaw);
  runTest(currentTest);
});*/
