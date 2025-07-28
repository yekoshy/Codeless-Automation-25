//https://practice-automation.com/tables/
let counter = 0;
let classPresent = false;


var intervalId = setInterval(function () {
  document.querySelector ('#tablepress-1 th.column-2').click();
  setTimeout(()=>{
    classPresent = document.querySelector('#tablepress-1 th.column-2').classList.contains ('dt-ordering-asc');
    console.log(document.querySelector('#tablepress-1 th.column-2').classList);
    console.log(counter)
    console.log(classPresent)
    counter +=1;
    if(classPresent == true) clearInterval(intervalId)
  },100)
  
  },500)
