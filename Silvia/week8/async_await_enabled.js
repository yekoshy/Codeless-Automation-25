//https://testpages.eviltester.com/styled/dynamic-buttons-disabled.html
const buttons = [
  { bid: "#button00", waitmessage: "", newBid: "#button01" },
  { bid: "#button01", waitmessage: "Wait...", newBid: "#button02" },
  { bid: "#button02", waitmessage: "Wait...", newBid: "#button03" },
  { bid: "#button03", waitmessage: "" },
];

const startText = 'Click Buttons In Order';
const endText = 'All Buttons Clicked'

//async function to wait for new button to be enabled
async function checkBtn(locator) {
  console.log(locator);
  let btn = document.querySelector(locator);
  
  return new Promise((resolve, reject) => {
    let isEnabled = setInterval(function () {
      console.log('interval')
      if (btn && !btn.hasAttribute('disabled')) {
        clearInterval(isEnabled);
        clearTimeout(checkTimeout);
        resolve(true);
      }
    }, 500);
    let checkTimeout = setTimeout(() => {
      clearInterval(isEnabled);
      reject("timeout");
    }, 30000);
  });
}


async function runTest(buttons) {
      console.assert(
      document.querySelector("#buttonmessage").innerText == startText,
      `Expected: ${endText}, found ${
        document.querySelector("#buttonmessage").innerText
      } `
    );
    for (const btn of buttons) {
      console.log(btn);
      let isEnabled = await checkBtn(btn.bid);
      if (isEnabled == true){
        document.querySelector(btn.bid).click();
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

  
