
let x = document.querySelector("[data-test='drag-handle-Item 1']")


x.focus()
setTimeout(() => {
	
	x.dispatchEvent(new KeyboardEvent('keydown',{code:'Space',key:' ',bubbles:true}))
	setTimeout(() => {
		x.dispatchEvent(new KeyboardEvent('keydown',{code:'ArrowDown',key:'ArrowDown',bubbles:true}))
		setTimeout(() => {
			x.dispatchEvent(new KeyboardEvent('keydown',{code:'ArrowDown',key:'ArrowDown',bubbles:true}))
			setTimeout(() => {
				x.dispatchEvent(new KeyboardEvent('keyup',{code:'Space',key:' ',bubbles:true}))
			
			
			}, 200);
		
		}, 200);
	
	
	}, 200);

}, 100);
