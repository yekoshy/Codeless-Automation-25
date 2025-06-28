//https://testpages.eviltester.com/styled/file-upload-test.html

const pageHeading = document.querySelector('.page-body h1');
const fileInputBtn = document.querySelector('input#fileinput');
const statusMessage = document.querySelector('#statusmessage');
const isAnImageRadio = document.querySelector('#itsanimage');
const isAFileRadio = document.querySelector('#itsafile');
const submitBtn = document.querySelector('input[type="submit"]')
const nameUploadedFile = document.querySelector('#uploadedfilename');

let testcases = [
    {name:'imageSuccess', filename:'test.png', type:'itsanimage', heading:'Uploaded File'},
    {name:'fileSuccess', filename:'test2.txt', type:'itsafile', heading:'Uploaded File'}]


function testFileUpload (testcase){
    
    myFileDummyUpload(testcase)
   

    setTimeout(() => {
        //set radiobutton for type
        if (testcase.type == 'isafile'){
            isAFileRadio.click();
        }else {
            isAnImageRadio.click();
        }
    
        submitBtn.click();
    
         setTimeout(() => {
            console.assert(pageHeading.innerText == testcase.heading, `Expected ${testcase.heading}, found ${pageHeading.innerText}`);
            console.assert(nameUploadedFile.innerText == testcase.filename, `Expected ${testcase.filename}, found ${nameUploadedFile.innerText}`);
            console.assert(document.querySelector('#goback'), `Expected Goback-Button, found none`);
        }, 500);
        
    }, 500);
}

function myFileDummyUpload (testcase){
    const myFileContent = ['My File Content'];
    let myFileName = testcase.filename;
    let myFile = new File(myFileContent, myFileName);

    // Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
    const dataTransfer = new DataTransfer();

    // Add your file to the file list of the object
    dataTransfer.items.add(myFile);

    // Save the file list to a new variable
    const fileList = dataTransfer.files;

    // Set your input `files` to the file list
    fileInputBtn.files = fileList;

    fileInputBtn.dispatchEvent(new Event('change', { bubbles: true }));
}