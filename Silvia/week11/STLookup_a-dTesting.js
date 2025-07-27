// https://practice-automation.com/tables/
// part 1: look up prices in tables

//table identifyers
const simpleTable = document.querySelector('figure.wp-block-table table');
// nameColumn is first column
const firstColumn = Array.from (document.querySelectorAll('figure.wp-block-table table tr > td:nth-child(1)'))
// price column is second column
const secondColumn = Array.from (document.querySelectorAll('figure.wp-block-table table tr > td:nth-child(2)'))

const expectedPriceList =  [{name:'Laptop', price:'$1200.00'}, {name:'Marbles', price:'$1.25'}, {name:'Oranges', price:'$3.99'}]

function assertPrices (){
    let priceList = [];
    for (let i = 1; i < firstColumn.length; i++) {
        priceList.push({name:firstColumn[i].innerText, price:secondColumn[i].innerText});
        
    }
    console.log(priceList);
    for (let j = 0; j < priceList.length;j++){
        
        console.assert(priceList[j].price == expectedPriceList.find(({ name }) => name === priceList[j].name).price , `Expected ${expectedPriceList.find(({ name }) => name === priceList[j].name).price}, found ${JSON.stringify(priceList[j])}`)
        
        console.log(`asserted ${JSON.stringify(priceList[j])} `)
        }
    
    
}

// part 2 dynamic table functions
const dynamicTableContainer = document.querySelector('#tablepress-1_wrapper');
const pagingSetterLocator = '#tablepress-1_wrapper #dt-length-0';
const filterInputLocator = '#dt-search-0';
const tableRowLocator = '#tablepress-1 tr';
const pagingButtonLocator = 'button.dt-paging-button';
const pagingInfoTextLocator = 'tablepress-1_info';
//const pagingInfoText = `Showing ${itemStart} to ${itemEnd} of ${itemMax} entries`;
const testcases = [{name:'paging00', action:'', pagingButtonsNo: 5, visibleRows: 11, pagingInfoText:'Showing 1 to 10 of 25 entries', activePagingButton:'0' }, 
                        {name:'paging01', action:{action:'click', target:'data-dt-idx="1"' }, visibleRows: 11, pagingButtonsNo: 5, pagingInfoText:'Showing 11 to 20 of 25 entries', activePagingButton:'1' },
                        {name:'paging02', action:{action:'click', target:'data-dt-idx="2"' }, visibleRows: 6, pagingButtonsNo: 5, pagingInfoText:'Showing 21 to 25 of 25 entries', activePagingButton:'2' },
                        {name:'paging03', action:{action:'select', target:pagingSetterLocator, value:25 }, visibleRows: 26, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 25 of 25 entries', activePagingButton:'0' },
                        {name:'paging04', action:{action:'select', target:pagingSetterLocator, value:50 }, visibleRows: 26, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 25 of 25 entries', activePagingButton:'0' },
                        {name:'paging05', action:{action:'select', target:pagingSetterLocator, value:100 }, visibleRows: 26, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 25 of 25 entries', activePagingButton:'0' },
                        {name:'filter01', action:{action:'filter', target:filterInputLocator, value:'ger' }, visibleRows: 3, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 2 of 2 entries (filtered from 25 total entries)', activePagingButton:'0' },
                        {name:'filter02', action:{action:'filter', target:filterInputLocator, value:'G' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0' },
                        {name:'sort01', action:{action:'sort', target:'column-2', value:'dt-ordering-asc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['Bangladesh', 'United Kingdom'] },
                        {name:'sort02', action:{action:'sort', target:'column-2', value:'dt-ordering-desc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['United Kingdom', 'Bangladesh' ] },
                        {name:'sort03', action:{action:'sort', target:'column-3', value:'dt-ordering-asc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['67.9', '223.8'] },
                        {name:'sort04', action:{action:'sort', target:'column-3', value:'dt-ordering-desc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['223.8', '67.9'] },
                        {name:'sort05', action:{action:'sort', target:'column-1', value:'dt-ordering-asc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['6', '21'] },
                        {name:'sort06', action:{action:'sort', target:'column-1', value:'dt-ordering-desc' }, visibleRows: 7, pagingButtonsNo: 3, pagingInfoText:'Showing 1 to 6 of 6 entries (filtered from 25 total entries)', activePagingButton:'0',sortResult:['21', '6'] },
                        
];



function testPaging (testcase){
   
    if (testcase.action.action == 'click'){
        
        if (document.querySelector(pagingSetterLocator).value != 10){
            console.log('test prerequisites not met');
            return
            
        }
        let target = `button.dt-paging-button[${testcase.action.target}]`;
        document.querySelector(target).click();
        
    }else if (testcase.action.action == 'select'){
        let target = testcase.action.target;
        
        document.querySelector(target).value = testcase.action.value;
        document.querySelector(pagingSetterLocator).dispatchEvent(new Event('change', {bubbles:true}))
        
        
        
    }
    
    assertTestcase (testcase);
    
}

function testSorting (testcase){

    let locator = `#tablepress-1 th.${testcase.action.target}`;
    console.log(locator);
    document.querySelector(locator).click();
    setTimeout (() =>{
    console.assert(document.querySelector(locator).classList.contains(testcase.action.value), `Expected ${testcase.action.value}, found ${document.querySelector(locator).classList}`);
   
    let firstItem = testcase.sortResult[0];
    let lastItem = testcase.sortResult[1];

    let column = `#tablepress-1 td.${testcase.action.target}`;
    //console.log(column);
    let columnContent = Array.from(document.querySelectorAll(column));
    let columnContentText = [];
    for (i = 0; i < columnContent.length; i++){
        columnContentText.push (columnContent[i].innerText)
    }
    
    console.log(columnContentText);
    console.log (columnContentText.length -1);
   
    // assert entry in first line
    console.assert(columnContentText[0] == firstItem, `Expected ${firstItem}, found ${columnContentText[0]}` );

    // assert entry in last line
    console.assert(columnContentText[columnContentText.length -1] == lastItem, `Expected ${lastItem}, found ${columnContentText[columnContentText.length -1]}` );
    
    
    assertTestcase (testcase);
    }, 2000);
}

function testFilters(testcase){
    document.querySelector(filterInputLocator).value = testcase.action.value;
    document.querySelector(filterInputLocator).dispatchEvent(new Event('change', {bubbles:true}))
    document.querySelector(filterInputLocator).dispatchEvent(new Event('search', {bubbles:true}))
        
    assertTestcase (testcase);
    
}

function assertTestcase (testcase){
   
    
    // Assert number of paging buttons (including prev/next)
    console.assert(document.querySelectorAll(pagingButtonLocator).length == testcase.pagingButtonsNo, `Expected ${testcase.pagingButtonsNo}, found ${document.querySelectorAll(pagingButtonLocator).length}` );
    
    // Assert number of rows (including header row)
    console.assert(document.querySelectorAll(tableRowLocator).length == testcase.visibleRows, `Expected ${testcase.visibleRows}, found ${document.querySelectorAll(tableRowLocator).length}`);

    //Assert current paging Button by attribute 'data-dt-idx'
    let currentButtonIndex = document.querySelector('button.dt-paging-button.current').getAttribute('data-dt-idx');
    console.assert( currentButtonIndex == testcase.activePagingButton,`Expected ${testcase.activePagingButton}, found ${currentButtonIndex}` );

    //Assert pagingInfoText
    let currentPagingInfoText = document.querySelector(`#${pagingInfoTextLocator}`).innerText;
    console.assert(currentPagingInfoText == testcase.pagingInfoText, `Expected ${testcase.pagingInfoText}, found ${currentPagingInfoText}`);


    console.log(`assertions for ${testcase.name} finished`);
    
}

function runAllTest(){
    for (let i = 0; i < testcases.length; i++){
       
        let testcase = testcases[i];
         console.log(`testing: ${testcase.name}`);
        if (testcase.name.startsWith('paging')){
            testPaging (testcase);
        } else if (testcase.name.startsWith('filter')){
            testFilters(testcase);
                
        } else if (testcase.name.startsWith('sort')){
            testSorting(testcase);
        }else {
            console.log('no function there');
        }
        
        
    }
}
