//https://moatazeldebsy.github.io/test-automation-practices/?#/dynamic-elements
function assertVisible(){
    console.assert(document.querySelector('[data-test="dynamic-item-0"]').innerText == 'Dynamic Content 1')

    console.assert(document.querySelector('[data-test="dynamic-item-1"]').innerText == 'Dynamic Content 2')

    console.assert(document.querySelector('[data-test="dynamic-item-2"]').innerText == 'Dynamic Content 3')
    console.log('assertion done')
}

document.querySelector('[data-test="reload-button"]').click()
setTimeout(()=>{assertVisible()},6000)


