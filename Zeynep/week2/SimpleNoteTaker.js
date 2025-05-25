
function AddTitle(titleValue="Title1") {
    
    document.querySelector(".title-input #note-title-input").value = titleValue;    

}

function AddNote(noteValue="Note1") {

    document.querySelector(".note-input #note-details-input").value = noteValue;
    
}

function ClickAddButton() {
    document.querySelector("#add-note").click();
}

function ClickCancelButton() {
    document.querySelector("#cancel-note").click();
}

function ClickDeleteButton() {
    document.querySelector(".delete-note-in-list").click();
}

function ClickEditButton() {
    document.querySelector(".edit-note-in-list").click();
}

let titleValue = "TitleArg"
let noteValue = "NoteArg"


function test_AddNote() {
    AddTitle(titleValue)
    AddNote(noteValue)
    ClickAddButton()
    console.assert(document.querySelector("#note-status-details").innerText=="Added Note", "Adding goes wrong.");
    console.assert(document.querySelector(".note-in-list .title-note-in-list").innerText==titleValue);
}

function test_CancelEditNote() {
    AddTitle(titleValue)
    AddNote(noteValue)
    ClickCancelButton()
    console.assert(document.querySelector("#note-status-details").innerText=="Cancelled Edit", "Cancelling goes wrong.");
}

function test_EditNote() {
    AddTitle(titleValue)
    AddNote(noteValue)
    ClickEditButton()
    console.assert(document.querySelector(".title-input #note-title-input").value==titleValue, "Editing goes wrong with Title.");
    console.assert(document.querySelector(".note-input #note-details-input").value = noteValue, "Editing goes wrong with Note.");

}

function test_DeleteNote() {
    AddTitle(titleValue)
    AddNote(noteValue)
    ClickDeleteButton()
    console.assert(document.querySelector(".list-of-notes").childElementCount==0, "Deleting goes wrong.");
}

test_AddNote()
test_CancelEditNote()
test_EditNote()
test_DeleteNote()