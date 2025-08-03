//https://moatazeldebsy.github.io/test-automation-practices/?#/dynamic-elements

//Dynamic Elements DOM
const myDynamicElements = document.querySelectorAll("main ul li[data-test]");
const timerInput = document.querySelector(
  'main input[data-test="load-time-slider"]'
);
const timerDisplay = document.querySelector(
  'main span[data-test="load-time-value"]'
);
const reloadBtn = document.querySelector(
  'main button[data-test="reload-button"]'
);

//Hidden content elements
const hiddenContent = document.querySelector(
  'main div[data-test="hidden-content"]'
);
const toogleHiddenBtn = document.querySelector(
  'main button[data-test = "toggle-hidden-button"]'
);

//helper function to determine the expected value for class list
//lazy check only on classlist length
function determineExpected() {
  const pre = hiddenContent.classList.length;
  return pre == 0 ? 0 : 1;
}

// function to check the hide/show function (DOM element present, only hidden-class is toggled)
function checkHideShow() {
  const expected = determineExpected();

  toogleHiddenBtn.click();
  const found = hiddenContent.classList.length;
  console.assert(found == expected, `Expected ${expected}, found ${found}`);
}

/* function to check for the dynamic content display
   checks for the first-child of the div[data-test="content-area"] is the loading indicator 
   by using the data-test value of the loading indicator
   with each interval, the elapsed time and the loading-indicator-presence is recorded
   if isLoading is false, assert for the ul and the time it took to show up */

function checkDynamicContent(times = 10) {
  console.log(times);
  reloadBtn.click();
  let dccOverTime = [];
  let dccPushCount = 0;
  let checkOverTime = setInterval(function () {
    let dcFirstChild = document.querySelector(
      'main div[data-test="content-area"]'
    ).firstElementChild;
    let isLoading =
      dcFirstChild.getAttribute("data-test") === "loading-indicator";
    dccOverTime.push({
      time: (dccPushCount + 1) * 0.5,
      isItLoading: isLoading,
    });
    dccPushCount++;
    //console.log(dccPushCount);
    console.log(dccOverTime[dccPushCount - 1]);
    if (isLoading === false) {
      console.assert(
        dcFirstChild.tagName === "UL",
        `Expected UL, found ${dcFirstChild.tagName}`
      );
      console.assert(
        dccPushCount * 0.5 > timerInput.value,
        `Expected ${(dccPushCount + 1) * 0.5} is larger than ${
          timerInput.value
        }, it was not`
      );
    }

    if (dccPushCount >= times) {
      clearInterval(checkOverTime);
      if (isLoading == true) {
        console.log(`isLoading is still true after ${times / 2} seconds`);
      }
    }
  }, 500);
}
