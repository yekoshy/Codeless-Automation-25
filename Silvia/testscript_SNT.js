// test for H1
const firstH1 = document.querySelector(".page-body h1");
console.log(firstH1.innerText);
console.assert(
  firstH1.innerText === "Simple Note Taker",
  'First H1 should be "Simple Note Taker"'
);

// test for Initial Notes list
const initialNotesList = document.querySelectorAll(
  "#list-of-notes .note-in-list"
);
console.log("initial Notes List length: " + initialNotesList.length);

// test for title field
const titleField = document.querySelector("#note-title-input");
console.log("title field existst" + titleField !== null);
console.assert(titleField !== null, "Title field should exist");

//test for note content  field
const noteContentField = document.querySelector("#note-details-input");
console.assert(noteContentField !== null, "Note content field should exist");

// test for Add Button
const addNoteButton = document.querySelector("#add-note");
console.assert(addNoteButton !== null, "Add note button should exist");

// test for cancel button
const cancelButton = document.querySelector("#cancel-note");
console.assert(cancelButton !== null, "Cancel button should exist");

// test for update button and status
const updateButton = document.querySelector("#update-note");
console.assert(updateButton !== null, "Update button should exist");
//console.assert(updateButton[hidden] === true, "Update button should be hidden"); //find out how to check if hidden

//create first note
titleField.value = "1st note";
console.assert(
  titleField.value === "1st note",
  'Title field should be "1st note"'
);
noteContentField.value = "1st Lorem Impsum";
console.assert(
  noteContentField.value === "1st Lorem Impsum",
  'Note content field should be "1st Lorem Impsum"'
);

// click add note button
addNoteButton.click();
const notesList = document.querySelectorAll("#list-of-notes .note-in-list");
console.log(
  "notes list length now" +
    notesList.length +
    " Initial notes list length" +
    initialNotesList.length
);
console.assert(
  notesList.length - initialNotesList.length === 1,
  "Note should be added to the list"
);

/* 
window.confirm = function (message) {
  console.log("Intercepted confirm:", message);
  return true; // Simulates pressing "OK"
};

document.querySelector("#clear-notes").click(); */
