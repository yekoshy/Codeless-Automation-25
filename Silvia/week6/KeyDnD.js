//for https://moatazeldebsy.github.io/test-automation-practices/#/drag-drop

let myKeyDnd = new function() {
    //collection of all the drag buttons
    let dragItems = document.querySelectorAll('main div[data-test="drag-drop-list"] button')
    //list of data-test attributes for all buttons
    let dragItemsIndex = [];
        dragItems.forEach((item, index) => {
        dragItemsIndex.push(item.getAttribute('data-test'));
        
    })

    this.moveOneDown= function () {
        console.log('oneMoveDown called');
        let toDragItem = document.querySelector(`div[data-test="drag-drop-list"] button[data-test="${dragItemsIndex[Math.floor(Math.random() * dragItemsIndex.length)]}"]`)
        console.log(toDragItem.getAttribute("data-test"));
        toDragItem.dispatchEvent(new KeyboardEvent('keydown', {code:'Space', key:' ', bubbles:true}));
        setTimeout(() => {
              toDragItem.dispatchEvent(new KeyboardEvent('keydown', {code:'ArrowDown', key:'ArrowDown', bubbles:true}));
        }, 500);
        setTimeout(() => {
              toDragItem.dispatchEvent(new KeyboardEvent('keyup', {code:'Space',key:' ', bubbles:true}));
        }, 1500);
        

        
    }

     this.moveOneUp= function () {
        console.log('oneMoveDown called');
        let toDragItem = document.querySelector(`div[data-test="drag-drop-list"] button[data-test="${dragItemsIndex[Math.floor(Math.random() * dragItemsIndex.length)]}"]`)
        console.log(toDragItem.getAttribute("data-test"));
        toDragItem.dispatchEvent(new KeyboardEvent('keydown', {code:'Space', key:' ', bubbles:true}));
        setTimeout(() => {
              toDragItem.dispatchEvent(new KeyboardEvent('keydown', {code:'ArrowUp', key:'ArrowUp', bubbles:true}));
        }, 500);
        setTimeout(() => {
              toDragItem.dispatchEvent(new KeyboardEvent('keyup', {code:'Space',key:' ', bubbles:true}));
        }, 1500);
        

        
    }
    
    
}

let randoDrag = setInterval(function(){
    let theRandoFunctions = []

    for (let prop in myKeyDnd){
    
        if (typeof myKeyDnd[prop] == 'function'){
            theRandoFunctions.push(prop);
        }
    }
   
    let randomFunctionIndex = Math.floor(Math.random() * theRandoFunctions.length);
    myKeyDnd[theRandoFunctions[randomFunctionIndex]]();
        
    },1000);

