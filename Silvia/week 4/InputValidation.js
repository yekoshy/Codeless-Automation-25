const formFields = [
  { fieldID: "firstname", type: "text" },
  { fieldID: "surnamename", type: "text" },
  { fieldID: "age", type: "number" },
  { fieldID: "country", type: "select" },
  { fieldID: "notes", type: "textarea" },
];

/*let firstname = document.querySelector('#firstname');
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let country = document.querySelector("#country");
let notes = document.querySelector("#notes"); */

async function runTest(testdata) {

    firstname.value = testdata.firstname;
    surname.value = testdata.surname;
    age.value = testdata.age;
    country.value = testdata.country;
    notes.value = testdata.note; 

    let formData = new URLSearchParams();
    formData.append("firstname", testdata.firstname);
    formData.append("surname", testdata.surname);
    formData.append("age", testdata.age);
    formData.append("country", testdata.country);
    formData.append("notes", testdata.notes);


        const response = await fetch("https://testpages.eviltester.com//validate/input-validation", {
            method: "POST",
            body: formData,
        });

        const html = await response.text();

        
        
        console.assert(
          document.querySelector("#valid-input-value"),
          `Expected: element with id valid-input-value exists, assert failed`
        );
    }
