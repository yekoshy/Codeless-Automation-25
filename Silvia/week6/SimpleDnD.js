//for https://yekoshy.github.io/Drag-n-Drop/

const dragBox = document.querySelector('#drag1');
const dropBox = document.querySelector('#drop1');

let myDnD = new function(){
    
    

    this.dragMyBox = function () {
        console.log('dragMyBox called');
        dragBox.dispatchEvent(new DragEvent('dragstart',{bubbles:true, pageX: 58, pageY: 58, dataTransfer: new DataTransfer()}));
        dropBox.dispatchEvent (new DragEvent('dragover',{bubbles:true,pageX: 58, pageY: 178, dataTransfer: new DataTransfer()}));
        dropBox.dispatchEvent (new DragEvent('drop', {bubbles: true,pageX: 58, pageY: 178, dataTransfer: new DataTransfer() }));
        dragBox.dispatchEvent(new DragEvent('dragend', {bubbles: true,dataTransfer: new DataTransfer()})); 
    }
}