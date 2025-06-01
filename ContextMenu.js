const element = $x("//div[contains(text(),'Right')]")[0]
const rect = element.getBoundingClientRect();

const event = new MouseEvent('contextmenu', {
  bubbles: true,
  cancelable: true,
  view: window,
  button: 2, // Right-click
  clientX: rect.left + rect.width / 2,
  clientY: rect.top + rect.height / 2
});

element.dispatchEvent(event);