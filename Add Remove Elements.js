//https://the-internet.herokuapp.com/add_remove_elements/
function addButton(){
    for(let i=0;i<5;i++){
        document.querySelector('div.example > button').click()
    }
}

function deleteAllButtons(){
    var buttonlist = document.getElementsByClassName('added-manually')
    console.log(buttonlist)
    let length = buttonlist.length;
    let i;
    /*
    //looping with HTMLcollection
    for(i=0; i<length;i++) {
        let x = buttonlist[0];
        console.log(buttonlist[0].click())
    }
    */
    var arr = Array.from(buttonlist);
    console.log(arr)
    while(arr.length >0){
        let item = arr.pop()
        console.log(item)
        item.click()
    }
    let count = document.querySelector("#elements").childElementCount;
    console.log(count)
    console.assert(count == 0,'The count should be equal to 0')
}

