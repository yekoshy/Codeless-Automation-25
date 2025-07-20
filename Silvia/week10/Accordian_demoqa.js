// test for https://demoqa.com/accordian

const pageTitle = document.querySelector("#accordianContainer h1");
const accordionContainer = document.querySelector(".accordion");
const allAkkordianNames = [
  "section1Heading",
  "section2Heading",
  "section3Heading",
];

const testcases = [
  {
    tc: "acc01",
    headerID: "section2Heading",
    accLocator: "#section2Heading +div",
    currStatus: "closed",
    expected: [
      {section1Heading: "closed"},
      {section2Heading: "open"},
      {section3Heading: "closed"}
    ]
  },
  {
    tc: "acc02",
    headerID: "section3Heading",
    accLocator: "#section3Heading +div",
    currStatus: "closed",
    expected: [
      { section1Heading: "closed" },
      { section2Heading: "closed" },
      { section3Heading: "open" },
    ],
  },
  {
    tc: "acc03",
    headerID: "section1Heading",
    accLocator: "#section1Heading +div",
    currStatus: "closed",
    expected: [
      { section1Heading: "open" },
      { section2Heading: "closed" },
      { section3Heading: "closed" },
    ],
  },
 
];

function checkAkkordionStatus(accordionHeader) {
    return document
      .querySelector(accordionHeader)
      .nextElementSibling.classList.contains("show")
      ? "open"
      : "closed";
    
}

function waitForClassPresent(data) {
  let counter = 0;
  let newClass = data.class;
  let locator = data.locator;
  console.log(locator);
  
  let isPresent = setInterval(() => {
    
    console.log (document.querySelector(locator).classList.contains(newClass));
 
    if (document.querySelector(locator).classList.contains(newClass)) {
      clearInterval(isPresent);
      return true;
    } else if (counter == 20) {
      clearInterval(isPresent);
      console.log(`${locator} ${newClass} not present after timeout`);
      return false;
    }
  }, 200);
}

function waitForSomething(times) {
  let counter = 0;
  let isElapsed = setInterval(() => {
    if (counter == 10) {
      clearInterval(isElapsed);
      console.log(`${times}/10 seconds elapsed`);
      return false;
    }
  }, 100);
}



function clickAndVerify(testcase) {
  console.log(testcase.tc);
  waitForSomething(10);
  let expected = JSON.stringify(testcase.expected);

  document.querySelector(`#${testcase.headerID}`).click();
  console.log(`#${testcase.headerID} clicked`);
  
  if (waitForClassPresent({locator:testcase.accLocator, class:'show'}) == true){
    let found = [];
    
    for (x = 0; x < allAkkordianNames.length; x++) {
      let akkname = allAkkordianNames[x];
      let status = checkAkkordionStatus(`#${akkname}`);
      found.push({[akkname]: status });
      
    }
   
   waitForSomething(10);
   found = JSON.stringify(found);
  console.assert(expected == found, `Expected ${expected}, found ${found}`);
    
  }else if (waitForClassPresent({locator:testcase.accLocator, class:'show'}) == false){
    console.log('wait for class present failed');
  }
  else('something else failed');
}

/*for (i=0; i < testcases.length; i++) {
  clickAndVerify(testcases[i])
}*/