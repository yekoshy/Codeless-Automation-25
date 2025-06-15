**HTML5 Drag and Drop Event Sequence**
A standard drag and drop operation involves a series of specific DOM DragEvents:

**Drag & Drop using DragEvent:**
example: https://yekoshy.github.io/Drag-n-Drop/
drag start -> drag over -> drop -> drag end 

draggable2.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer: dataTransfer}))
droppable.dispatchEvent(new DragEvent('dragover', {bubbles:true,dataTransfer: dataTransfer}));
droppable.dispatchEvent(new DragEvent('drop', {bubbles: true,dataTransfer: dataTransfer }));
draggable2.dispatchEvent(new DragEvent('dragend', {bubbles: true,dataTransfer: dataTransfer}));

**Drag & Drop event using Keyboard:**
example: https://moatazeldebsy.github.io/test-automation-practices/#/drag-drop 
Keydown space -> Keydown arrow down -> Keyup space

x.dispatchEvent(new KeyboardEvent('keydown',{code:'Space',key:' ',bubbles:true}))
x.dispatchEvent(new KeyboardEvent('keydown',{code:'ArrowDown',key:'ArrowDown',bubbles:true}))
x.dispatchEvent(new KeyboardEvent('keyup',{code:'Space',key:' ',bubbles:true}))

**Drag & Drop event using mouse:**



**Drag & Drop using Selenium IDE:**
Command: "drag and drop to object"
example: https://testpages.eviltester.com/styled/drag-drop-javascript.html 
example: https://demoqa.com/droppable
