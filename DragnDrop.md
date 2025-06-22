**HTML5 Drag and Drop Event Sequence** <br>
A standard drag and drop operation involves a series of specific DOM DragEvents: <br>

**Drag & Drop using DragEvent:** <br>
example: https://yekoshy.github.io/Drag-n-Drop/ <br>
drag start -> drag over -> drop -> drag end <br>

draggable2.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer: dataTransfer})) <br>
droppable.dispatchEvent(new DragEvent('dragover', {bubbles:true,dataTransfer: dataTransfer})); <br>
droppable.dispatchEvent(new DragEvent('drop', {bubbles: true,dataTransfer: dataTransfer })); <br>
draggable2.dispatchEvent(new DragEvent('dragend', {bubbles: true,dataTransfer: dataTransfer})); <br>

**Drag & Drop event using Keyboard:** <br>
example: https://moatazeldebsy.github.io/test-automation-practices/#/drag-drop <br>
Keydown space -> Keydown arrow down -> Keyup space <br>

x.dispatchEvent(new KeyboardEvent('keydown',{code:'Space',key:' ',bubbles:true})) <br>
x.dispatchEvent(new KeyboardEvent('keydown',{code:'ArrowDown',key:'ArrowDown',bubbles:true})) <br>
x.dispatchEvent(new KeyboardEvent('keyup',{code:'Space',key:' ',bubbles:true})) <br>

**Drag & Drop event using mouse:** <br>
example: https://demoqa.com/droppable <br>
mouse down -> mouse move -> mouse move -> mouse up <br>
x.dispatchEvent(new MouseEvent(type, {bubbles: true,cancelable: true,clientX: x,clientY: y,view: window}); <br>
  const startX = srcRect.left + srcRect.width / 2; <br>
  const startY = srcRect.top + srcRect.height / 2; <br>
  
  const endX = tgtRect.left + tgtRect.width / 2; <br>
  const endY = tgtRect.top + tgtRect.height / 2; <br>

  ![Rectangle Center](https://i.sstatic.net/0EtOb.png)

**Drag & Drop using Selenium IDE:** <br>
Command: "drag and drop to object" <br>
example: https://testpages.eviltester.com/styled/drag-drop-javascript.html  <br>
example: https://demoqa.com/droppable <br>
