// test for https://testpages.eviltester.com/styled/tag/dynamic-table.html

const tableLocator = '#dynamictable';
const tableHeaderLocator = '#dynamictable th';
const tableRowsLocator = '#dynamictable tr';

const tableDateInputLocator = '#jsondata';
const tableCaptionInput = '#caption';
const tableIDInput = '#tableid';
const refreshButton = '#refreshtable';
let autotestdata = [];

const testcases = [
    {name:'tc01', caption:'tc01-Caption', tableID: 'tableID01', tabledata: [
        {Column1: "qwertzuiopü+", Column2: "asdfghjklöä"},
        {Column1: "yxcvbnm,.-", Column2: "1234567890"},
    ], expected: {colums:2, rows:3}},
     {name:'tc02', caption:'tc02-Caption', tableID: 'tableID02', tabledata: [
        {zahl1: 12, zahl2: 34},
        {zahl1: 678, zahl2: 5364},
    ], expected: {colums:2, rows:3}},
    {name:'tc03', caption:'tc03-Caption', tableID: 'tableID03', tabledata: [
        {text: "hfewfhefo", zahl: 34},
        {text: "hcuewfhu", zahl: 5364},
    ], expected: {colums:2, rows:3}},
    {name:'tc04', caption:'tc04-Caption', tableID: 'tableID04', tabledata: [
        {text: "hfewfhefo", zahl: 34},
        {text: "hcuewfhu", zahl2: 5364},
    ], expected: {colums:3, rows:3}},
     {name:'tc05', caption:'tc05-Caption', tableID: 'tableID05', tabledata: [
        {text: "hfewfhefo", zahl: 34},
        {text: "hcuewfhu", zahl: 5364},
        {text: "njdezw", zahl: '' },
    ], expected: {colums:4, rows:3}},
      {name:'tc06', caption:'tc06-Caption', tableID: 'tableID06', tabledata: [
        {text: "!§$%&/()=?637283", zahl: 34},
        {text: "hcuewfhu", zahl: 5364},
        {text: "njdezw", zahl: '' },
    ], expected: {colums:4, rows:3}},
     
];

function myGridHelper(columns, rows){
    let tabledata = [];
    let columNames = [];
    for (let i = 0; i < columns; i++){
        columNames.push(`column_${i}`)
        
    }
    
    for (let j= 0; j < rows; j++){
        let row = {};
        for (let k = 0; k< columNames.length; k++){
            //console.log(k);
            let value = `${j}, ${k}`;
            row[columNames[k]] = value;
        }
        console.log(JSON.stringify(row));
        tabledata.push(row);
        
   
    }
    return tabledata;
}
//console.log(JSON.stringify(myGridHelper(3,4)));



function enterData(testcase){
    document.querySelector(tableCaptionInput).value = testcase.caption;
    document.querySelector(tableIDInput).value = testcase.tableID;
    let newTabledata = JSON.stringify(testcase.tabledata);
    console.log( `new tabledata ${newTabledata}`)
    document.querySelector(tableDateInputLocator).value = newTabledata;
    document.querySelector(refreshButton).click();
}

function assertTable(testcase){
    // assert new table is loaded
    let captionLocator = `#${testcase.tableID} caption`;
    console.log(captionLocator);
    console.assert (document.querySelector('table').id == testcase.tableID, 
    `Expected ${testcase.tableID}, found ${document.querySelector('table').id}`)
    
    console.assert(document.querySelector(captionLocator).innerText == testcase.caption, 
    `Expected ${testcase.caption}, found ${document.querySelector(captionLocator).innerText}`
    );

    
    //Assert rows
    let expectedRows = testcase.tabledata.length +1; 
    let tableRowsLocator = `#${testcase.tableID} tr`;
    let foundRows = document.querySelectorAll(tableRowsLocator).length;
    console.assert (foundRows == expectedRows, `Expected ${expectedRows}, found ${foundRows}`);

    //Assert columns
    let expectedColumns =[];
    for (let i = 0; i < testcase.tabledata.length; i++){
        let columns = Object.getOwnPropertyNames(testcase.tabledata[i]);
        for (let j = 0; j< columns.length; j++){
            if (!expectedColumns.includes(columns[j])){
                expectedColumns.push(columns[j])
            }
        }
    }
    expectedColumns.sort();
    console.log(`expectedColumns: ${expectedColumns}`);
    let tableColumnsLocator = `#${testcase.tableID} th`;
    let columnContent = Array.from(document.querySelectorAll(tableColumnsLocator));
    let columnContentText = [];
    for (k = 0; k < columnContent.length; k++){
        columnContentText.push (columnContent[k].innerText)
    }
    columnContentText.sort();
    
    console.assert(columnContentText.join(",") == expectedColumns.join(","), `Expected ${expectedColumns}, found ${columnContentText}`);
}

function generateTestcase(myColumns, myRows) {
    let testcase = {
        name: "tcAuto",
        caption: "tcAuto-Caption",
        tableID: "tcAuto",
        expected: { colums: myColumns , rows: myRows },
    };
    testcase.tabledata = myGridHelper(myColumns, myRows);
    return testcase;
}

function runTest (testcase){
    console.log(testcase.name)
    enterData(testcase);

    setTimeout(assertTable(testcase),1000);
}

