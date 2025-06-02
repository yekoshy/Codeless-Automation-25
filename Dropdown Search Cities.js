//https://yekoshy.github.io/Dropdown/
/*
let textarea = document.querySelector("textarea[type='search']")
textarea.value ='new'
textarea.dispatchEvent(new InputEvent('input',{bubbles:true}))

document.querySelector("#select2-city-select-result-siho-new-york").dispatchEvent(new MouseEvent('mouseup',{bubbles:true}))

document.querySelector("#select2-city-select-container > li > button > span").click()
*/




function select(txt){
    let textarea = document.querySelector("textarea[type='search']")
    textarea.value = txt
    textarea.dispatchEvent(new InputEvent('input',{bubbles:true}))

    let list = document.querySelectorAll("#select2-city-select-results > li")
    for(let i=0;i<list.length;i++){
        list[i].dispatchEvent(new MouseEvent('mouseup',{bubbles:true}))
    }
}
//select('ph')
select('san')
function removeAll(){
    let btn = document.querySelector("body > span > span.selection > span > button > span")
    btn.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}))
}

//document.querySelector("#select2-city-select-container > li > button > span").click()
