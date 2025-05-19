document.querySelector("#side1").value
document.querySelector("#side2").value
document.querySelector("#side3").value
document.querySelector("#identify-triangle-action").click()
document.querySelector("#triangle-type").textContent
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
let pixel = document.querySelector("#triangle-canvas").getContext('2d').getImageData(0,0,1,1).data
//pixel[] not equal to zero
//Selenium IDE commands:
captureEntirePageScreenshot
verifyElementPresent