let draggable2 = document.querySelector("#drag1")
let droppable = document.querySelector("#drop1")
const dataTransfer = new DataTransfer('text/plain',"#drag1");
setTimeout(() => {
	draggable2.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer: dataTransfer}))
	setTimeout(() => {
		droppable.dispatchEvent(new DragEvent('dragover', {bubbles:true,dataTransfer: dataTransfer}));
		setTimeout(() => {
			droppable.dispatchEvent(new DragEvent('drop', {bubbles: true,dataTransfer: dataTransfer }));
			setTimeout(() => {
				draggable2.dispatchEvent(new DragEvent('dragend', {bubbles: true,dataTransfer: dataTransfer}));
			}, 200);
		}, 200);
	}, 200);
}, 200);
