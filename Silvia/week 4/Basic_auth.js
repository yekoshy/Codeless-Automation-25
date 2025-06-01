let invalidAuth = [
  { testID: "BA_012", username: "123", password: "123" },
  { testID: "BA_10", username: "ADMIN", password: "admin" },
  { testID: "BA_10A", username: "ADMIN", password: "ADMIN" },
  { testID: "BA_10B", username: "aDMIN", password: "admin" },
  { testID: "BA_011", username: "admin", password: "aDmin" },
  { testID: "BA_006", username: '67213!"§$%&/(', password: "admin" },
  { testID: "BA_008", username: "admin1", password: "admin" },
  { testID: "BA_009", username: "admin", password: "admin1" },
  { testID: "BA_003", username: "some", password: "one" },
  { testID: "BA_004", username: "admin", password: "" },
  { testID: "BA_005", username: "", password: "admin" },
  { testID: "BA_013", username: "asdgfrt", password: "asdgfrt" },
];

let validAuth = [{ testID: "BA_002", username: "admin", password: "admin" }];
