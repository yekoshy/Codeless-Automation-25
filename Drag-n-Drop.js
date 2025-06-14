let x = document.querySelector("[data-test='drag-handle-Item 1']");

if (x) {
    // 1. Ensure the element has focus
    x.focus();
    console.log("Element focused:", x);

    // 2. Dispatch 'keydown' for 'Space'
    setTimeout(() => {
        x.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', key: ' ', bubbles: true }));
        console.log("Space keydown dispatched.");

        // 3. Dispatch 'keydown' for 'ArrowDown' (first time)
        setTimeout(() => {
            x.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', key: 'ArrowDown', bubbles: true }));
            console.log("ArrowDown keydown (1) dispatched.");

            // 4. Dispatch 'keydown' for 'ArrowDown' (second time)
            setTimeout(() => {
                x.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', key: 'ArrowDown', bubbles: true }));
                console.log("ArrowDown keydown (2) dispatched.");

                // 5. Dispatch 'keyup' for 'Space'
                setTimeout(() => {
                    x.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space', key: ' ', bubbles: true }));
                    console.log("Space keyup dispatched.");
                }, 200); // Small delay before keyup
            }, 200); // Small delay between arrow downs
        }, 200); // Small delay after space down
    }, 100); // Initial delay to ensure focus registers
} else {
    console.error("Element with data-test='drag-handle-Item 1' not found.");
}
