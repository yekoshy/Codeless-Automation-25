document.querySelector("option[value='red']").selected = true
document.querySelector("option[value='blue']").selected = true
document.querySelector("option[value='green']").selected = true
document.querySelector("#multi-dropdown").dispatchEvent(new Event('change',{bubbles:true}))
