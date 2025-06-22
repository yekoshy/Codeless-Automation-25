// https://testpages.eviltester.com/uploads/fileprocessor
setTimeout(() => {
  // Create a fake file using the File constructor
  const testFile = new File(["Hello, this is test content!"], "testfile.txt", {
    type: "text/plain",
  });
  setTimeout(() => {
    // Get the file input element
  const fileInput = document.querySelector('input[type="file"]');

 // Use DataTransfer to simulate a file upload
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(testFile);
  fileInput.files = dataTransfer.files;

}, 1000);

}, 1000);




document.querySelector("#itsafile").checked = true
document.querySelector("[type=submit]").click()
