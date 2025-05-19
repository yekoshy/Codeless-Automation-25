//document.querySelector(".custom-control #yesRadio").click()
//document.querySelector(".custom-control #impressiveRadio").click()
//document.querySelector(".custom-control #noRadio").disabled //true
//document.querySelector(".mt-3 .text-success").innerText


document.querySelector(".custom-control #yesRadio").click()
console.assert(document.querySelector(".mt-3 .text-success").innerText === "Yes")

document.querySelector(".custom-control #impressiveRadio").click()
console.assert(document.querySelector(".mt-3 .text-success").innerText === "Impressive")


console.assert(document.querySelector(".custom-control #noRadio").disabled === true)
