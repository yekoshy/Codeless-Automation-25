// test for https://practice-automation.com/accordions/

const pageTitle = document.querySelector("h1[itemprop='headline']");
const accordionContainerLocator = '.wp-block-coblocks-accordion';
const accordionItemBlockLocator = '.wp-block-coblocks-accordion-item'
const accodionDetailsContainerLocator = 'details';

const testcases = [
  {
    tc: "acc01",
    no: 0,
    currStatus: "closed",
    expected: "open",
  },
  {
    tc: "acc02",
    no: 0,
    currStatus: "open",
    expected: "closed",},
  
];

function checkAkkordionStatus(locator) {
  console.log(locator);
    return document
      .querySelector(locator).hasAttribute('open')
      ? "open"
      : "closed";
    
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
  
  console.assert(testcase.currStatus == checkAkkordionStatus('details'), `Expected ${testcase.currStatus}, 
found ${checkAkkordionStatus('details')}`);
  document.querySelector('summary').click();
  console.log(`#${testcase.no} clicked`);
  
  
   waitForSomething(10);
  let expected = testcase.expected;
  let found = checkAkkordionStatus('details');
  console.assert(expected == found, `Expected ${expected}, found ${found}`);
    
  
}

function runTest (testcases){
  console.assert(pageTitle.innerText == 'Accordions');
  console.log('asserted title');
  for (let i = 0; i < testcases.length; i++){
    console.log(i);
    clickAndVerify(testcases[i]);
  }
}
