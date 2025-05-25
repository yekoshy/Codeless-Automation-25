//https://testpages.eviltester.com/styled/calculator

const inputs = [
    [5, 3], 
    [5, 0],
    [5, -10],
    [5.5, 2.2],
    [5.5, -2.2],
    ["number", 2],
    ["", 2],
    [0, 0]
]

const output_plus = [
    "8", "5", "-5", "7.7", "3.3", "ERR", "ERR", "0"
]
const output_times = [
    "15", "0", "-50", "12.1", "-12.1", "ERR", "ERR", "0"
]
const output_minus = [
    "2", "5", "15", "3.3", "7.7", "ERR", "ERR", "0"
]
const output_divide = [
    "1.666667", "0", "-0.5", "2.5", "-2.5", "ERR", "ERR", "0"
]

/////////////////////////////////////////////
async function Calculator(expectedOutputs, operator) {
    for (let i = 0; i < inputs.length; i++) {
        const number1 = inputs[i][0];
        const number2 = inputs[i][1];
        //const func = "plus"; 
        const func = operator

        const formData = new URLSearchParams();
        formData.append("number1", number1);
        formData.append("number2", number2);
        formData.append("function", func);

        const response = await fetch("calculator", {
            method: "POST",
            body: formData,
        });

        const html = await response.text();

        // Temporary DOM parser to extract answer
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const answer = tempDiv.querySelector("#answer")?.innerText;
        console.assert(answer === expectedOutputs[i], `Expected ${expectedOutputs[i]}, got ${answer}`);
    }
}
/////////////////////////////////////////////

Calculator(output_plus, "plus")
Calculator(output_times, "times")
Calculator(output_minus, "minus")
Calculator(output_divide, "divide")

/*
document.querySelector(".form-label #number1").value = 5
document.querySelector(".form-label #number2").value = 7
document.querySelector(".form-label #function").selectedIndex = 1 //times
document.querySelector("#calculate").click()
document.querySelector("#answer").innerText
*/
/*
function Manual(){
    document.querySelector(".form-label #number1").value = 5
    document.querySelector(".form-label #number2").value = 3
    document.querySelector(".form-label #function").selectedIndex = 0
    //document.querySelector("#calculate").click()
    document.querySelector(".centered > form").submit()
    sconsole.log("actual: " + document.querySelector("#answer").innerText + "  Expected: " + output)
    console.assert(document.querySelector("#answer").innerText === output, "Answer false")
}
*/