function testSimpleDynamicButton(){
document.querySelector("#button00").click()
setTimeout(()=>{
    document.querySelector("#button01").click()
    console.log(document.querySelector("#waitmessage").textContent)
    setTimeout(()=>{
        document.querySelector("#button02").click()
        console.log(document.querySelector("#waitmessage").textContent)
        setTimeout(()=>{
           document.querySelector("#button03").click()
            console.log(document.querySelector("#buttonmessage").textContent)
        },4000)
        
    },2000)

    
},500)
}
