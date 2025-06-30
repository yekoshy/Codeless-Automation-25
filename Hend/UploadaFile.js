
const file = new File(["Hend was here"], "hello.txt", { type: "text/plain" });

const dataTransfer = new DataTransfer();
dataTransfer.items.add(file);

const fileInput = document.querySelector("#fileinput");
fileInput.files = dataTransfer.files;


document.querySelector("#itsafile").checked = true;
const submitBtn = document.querySelector("body > div.page-body > div.centered > form > div:nth-child(4) > input");
submitBtn.click();

setTimeout(() => {
  const explanationP = document.querySelector(".explanation > p");
  if (explanationP && explanationP.textContent.trim() === "You uploaded a file. This is the result.") {
    console.log("Assertion passed: Text matched!");
  } else {
    console.error("Assertion failed: Text not matched or element missing.");
  }
}, 500);
