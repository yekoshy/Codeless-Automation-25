//https://yekoshy.github.io/Dropdown/
let textarea = document.querySelector("textarea[type='search']")

//textarea.focus()
textarea.value ='new'
textarea.dispatchEvent(new InputEvent('input',{bubbles:true}))

document.querySelector("#select2-city-select-result-siho-new-york").dispatchEvent(new MouseEvent('mouseup',{bubbles:true}))

document.querySelector("#select2-city-select-container > li > button > span").click()
