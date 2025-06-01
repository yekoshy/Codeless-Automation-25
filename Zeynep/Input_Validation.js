//https://testpages.eviltester.com/styled/validation/input-validation.html

const testDataPositive = 
[
//positive cases
  ["Evelyn", "Andersonssa", 22, "Afghanistan", "Test1"], //11 chars
  ["Avery", "Brownstones", 33, "Cabo Verde", "Test2"],
  ["Maria", "Johnsonsons", 44, "Germany", "Test3"],
  ["Leonard", "Fitzgeralds", 55, "Andorra", "Test4"],
  ["Samuel", "Montgomerya", 66, "Turkey", "Test5"],
//testing boundries
  ["ABCDE", "Validlastname", 22, "Turkey", "Test6"], //5 chars
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK", "Validlastname", 72, "South Korea", "Test7"], //89 chars
  ["ValidFirstName", "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZA", 25, "Cabo Verde", "Test8"], //11 chars
  ["ValidFirstName", "ABCDEFGHJKL", 25, "Germany", "Test9"], //79 chars
  ["ValidFirstName", "Validlastname", 18, "Zambia", "Test10"], //18
  ["ValidFirstName", "Validlastname", 80, "Zimbabwe", "Test11"], //80
  ["ValidFirstName", "Validlastname", 43, "Yemen", "Test12"],
  ["ValidFirstName", "Validlastname", 73, "Turkey", "Test13"],
  ["ValidFirstName", "Validlastname", 35, "Zimbabwe", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.."] //2500
]

const testDataNegatives = 
[//negatives
  ["AB", "Validlastname", 25, "Turkey", "Test15"], //firstname-error-value > Firstname too short
  ["ABCD", "Validlastname", 25, "Laos", "Test16"], //firstname-error-value > Firstname too short
  ["     ", "Validlastname", 25, "Turkey", "Test17"],
  [12345, "Validlastname", 25, "Afghanistan", "Test18"],
  [-1234, "Validlastname", 25, "Afghanistan", "Test19"],
  [1234.5, "Validlastname", 25, "Germany", "Test20"],
  ["ValidFirstName", "ABCDEABCD", 25, "United Kingdom", "Test21"],
  ["ValidFirstName", "         ", 25, "Afghanistan", "Test22"],
  ["ValidFirstName", 12345678901, 25, "United Kingdom", "Test23"],
  ["ValidFirstName", -1234567890, 25, "Germany", "Test24"],
  ["ValidFirstName", 1234.567890, 25, "United Kingdom", "Test25"],
  //["ValidFirstName", "Validlastname", " ", "Germany", "Test26"], //500 ERROR
  ["ValidFirstName", "Validlastname", -22, "Germany", "Test27"], //age-error-value > Age out of range
  //["ValidFirstName", "Validlastname", 22.5, "Germany", "Test28"], //500 ERROR
  ["ValidFirstName", "Validlastname", 77, "United Kingdom", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.ab"] //2501
]

async function CheckInputForm(testData) {
    for (let i = 0; i < testData.length; i++) {
        const [firstname, surname, age, country, notes] = testData[i];
        
        const form = new URLSearchParams();
        form.append("firstname", firstname);
        form.append("surname", surname);
        form.append("age", age);
        form.append("country", country);
        form.append("notes", notes);

        const response = await fetch("/validate/input-validation", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: form.toString()
        });

        const html = await response.text();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        console.log(html);
        console.assert(html.includes("valid-input-value"), `ERROR: Input Value is not Valid ${testData[i]}`);
        
    }
}

await CheckInputForm(testDataPositive);
await CheckInputForm(testDataNegatives);
