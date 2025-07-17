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
    currStatus: "closed",
    expected: [
      { section1Heading: "open" },
      { section2Heading: "closed" },
      { section3Heading: "closed" },
    ],
  },
  {
    tc: "acc04",
    headerID: "section1Heading",
    currStatus: "open",
    expected: [
      { section1Heading: "closed" },
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

function clickAndVerify(testcase) {
  console.log(testcase.tc);
  let expected = JSON.stringify(testcase.expected);

  document.querySelector(`#${testcase.headerID}`).click();
  console.log(`#${testcase.headerID} clicked`);
  let found = [];
  setTimeout(() => {
    for (x = 0; x < allAkkordianNames.length; x++) {
      let akkname = allAkkordianNames[x];
      let status = checkAkkordionStatus(`#${akkname}`);
      found.push({[akkname]: status });
      
    }
  }, 300);
  y = 0;
  while (found.length < allAkkordianNames.length) {
    console.log("waiting");
    y += 1;
    if (y > 20) break;
  }

  setTimeout(()=> {found = JSON.stringify(found);
  console.assert(expected == found, `Expected ${expected}, found ${found}`)}, 500);
  
}

