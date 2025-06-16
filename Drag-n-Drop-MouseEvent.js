function simulateMouseEvent(type, elem, x, y) {
  const evt = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y,
    view: window
  });
  elem.dispatchEvent(evt);
}

function mouseDragDrop(source, target) {
  const srcRect = source.getBoundingClientRect();
  const tgtRect = target.getBoundingClientRect();

  const startX = srcRect.left + srcRect.width / 2;
  const startY = srcRect.top + srcRect.height / 2;
  const endX = tgtRect.left + tgtRect.width / 2;
  const endY = tgtRect.top + tgtRect.height / 2;

  simulateMouseEvent("mousedown", source, startX, startY);
  simulateMouseEvent("mousemove", document, startX + 5, startY + 5);
  simulateMouseEvent("mousemove", document, endX, endY);
  simulateMouseEvent("mouseup", target, endX, endY);
}

const draggable = document.querySelector("#draggable");
const droppable = document.querySelector("#droppable");
mouseDragDrop(draggable, droppable);
