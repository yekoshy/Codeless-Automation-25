// https://testpages.eviltester.com/styled/dynamic-buttons-simple.html
//texts and buttons

const buttons = [
  { bid: "#button00", waitmessage: "", newBid: "#button01" },
  { bid: "#button01", waitmessage: "Wait...", newBid: "#button02" },
  { bid: "#button02", waitmessage: "Wait...", newBid: "#button03" },
  { bid: "#button03", waitmessage: "" },
];

const startText = "Click all 4 buttons.";
const endText = "All Buttons Clicked";

//click button and assert waitmessage

function clickBtn(btn) {
  document.querySelector(btn.bid).click();
  console.log(`Clicked ${btn.bid}`);
  actualMessage = document.querySelector("#waitmessage").innerText;
  console.assert(
    actualMessage == btn.waitmessage,
    `Expected ${btn.waitmessage}, found ${actualMessage} `
  );
}

//async function to wait for new button to appear
async function checkBtn(locator) {
  console.log(locator);
  return new Promise((resolve, reject) => {
    let newButton = setInterval(function () {
      if (document.querySelector(locator)) {
        clearInterval(newButton);
        clearTimeout(checkTimeout);
        resolve(true);
      }
    }, 500);
    let checkTimeout = setTimeout(() => {
      clearInterval(newButton);
      reject("timeout");
    }, 30000);
  });
}

async function runTest(buttons) {
  if (document.querySelectorAll("button").length > 1) {
    console.log("Please reload page and try again");
  } else {
    console.assert(
      document.querySelector("#buttonmessage").innerText == startText,
      `Expected: ${endText}, found ${
        document.querySelector("#buttonmessage").innerText
      } `
    );
    for (const btn of buttons) {
      console.log(btn);
      clickBtn(btn);
      if (btn.newBid) {
        try {
          // is there any other way to do this?
          let isNewButton = await checkBtn(btn.newBid);
          console.assert(isNewButton === true);
        } catch (error) {
          console.log(error);
        }
      }
    }
    console.assert(
      document.querySelector("#buttonmessage").innerText == endText,
      `Expected: ${endText}, found ${
        document.querySelector("#buttonmessage").innerText
      } `
    );
    console.log("test successful");
  }
}
