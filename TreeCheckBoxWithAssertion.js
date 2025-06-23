document.querySelector("[aria-label='Expand all']").click()
let allCheckboxes = document.querySelectorAll('ol li input')

//console.log(allCheckboxes)

function assert(){
    let txtSuccess = document.querySelectorAll("#result > span.text-success");
    const textArray = Array.from(txtSuccess).map(el => el.innerText);
    console.log(textArray)
    for(let i=0; i<textArray.length;i++){
        let item = document.querySelector("input#tree-node-"+textArray[i])
        console.assert(item.checked == true)
        
        console.log("input#tree-node-"+textArray[i]+" is checked:" + item.checked)
    }
}

setInterval(function(){
    allCheckboxes[Math.floor(Math.random() * allCheckboxes.length)].click();
    assert()
},1000);
