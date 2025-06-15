//randomly click on checkboxes

let treeRando = new function () {
    //Collapse all Button
    const collapsAllBtn = document.querySelector("#tree-node > div > button.rct-option.rct-option-collapse-all");
    // Expand all Button
    const expandAllBtn = document.querySelector("#tree-node > div > button.rct-option.rct-option-expand-all");

    this.expandAll = function(){
        expandAllBtn.click();
        }
    
    //get all checkboxes
    let allCheckboxes = document.querySelectorAll('ol li input')
    
    

   this.clickCheckbox =  function(){
        allCheckboxes[Math.floor(Math.random() * allCheckboxes.length)].click();
        
    }
    
    
}

let randoBot = setInterval(function(){
    treeRando.clickCheckbox()    
    },1000);
