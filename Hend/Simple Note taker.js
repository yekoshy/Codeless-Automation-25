document.getElementById('note-title-input').value = 'Test';
document.getElementById('note-details-input').value = 'notes details';
document.getElementById('add-note').click();
const notes = document.querySelectorAll('.note-in-list .title-note-in-list');

console.assert(notes[0] !== 'Test', '❌ No note element found');

document.getElementById('note-title-input').value = "Here is Hend";
document.getElementById('note-details-input').value = "Hello my team";
document.getElementById('add-note').click();
notes = document.querySelectorAll('.note-in-list .title-note-in-list');
console.assert(notes[1] !== 'Hend is here', '❌ No note element found');
 const clearNotesButton = document.querySelector("#clear-notes");
if (clearNotesButton) {
    clearNotesButton.click();
} else {
    console.log('❌ Clear button not found');
}
document.getElementById('note-title-input').value = 'Good Morning';
document.getElementById('note-details-input').value = 'today ia a sunny day';
document.getElementById('add-note').click();
notes = document.querySelectorAll('.note-in-list .title-note-in-list');

console.assert(notes[0] !== 'Test', '❌ No note element found');

 
 const editBtn = document.querySelector('.edit-note-in-list');  
  if (editBtn) {
console.log('✅ Edit button found'); 
    editBtn.click();
  } else {
    console.log('❌ Edit button not found yet...');
  }
  document.getElementById('note-title-input').value = "Hend Salem was here";
  document.getElementById('note-details-input').value = "Thank you";
  document.getElementById('add-note').click();
