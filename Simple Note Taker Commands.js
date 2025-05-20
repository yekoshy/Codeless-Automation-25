document.querySelector("#note-title-input").value='test'
document.querySelector("#note-details-input").value = 'test test '

document.querySelector("#add-note").click()
document.querySelector("#cancel-note").click()

document.querySelector("#note-status-details").textContent

document.querySelector("#load-notes").click()
document.querySelector("#show-notes").click()


window.confirm = function(message) {
  console.log("Intercepted confirm:", message);
  return true; // Simulates pressing "OK"
};

document.querySelector("#clear-notes").click()

document.querySelector("#list-of-notes > .note-in-list>.edit-note-in-list").click()

document.querySelector("#list-of-notes > .note-in-list>.edit-note-in-list").dataset.key

document.querySelector("#update-note").click()
