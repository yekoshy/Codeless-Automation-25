let validTestData = [
  {
    testno: "IVE_002",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 39,
    country: "Canada",
    note: "Valid Test",
    expected1: "Your Input passed validation",
  },

  {
    testno: "IVE_005",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 39,
    country: "Canada",
    note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimat",
    expected1: "Your Input passed validation",
  },

  {
    testno: "IVE_006",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 39,
    country: "Germany",
    note: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    expected1: "Your Input passed validation",
  },

  {
    testno: "IVE_008",
    firstname: "Alanna",
    surname: "",
    age: 39,
    country: "Canada",
    note: "Empty Last Name",
    expected1: "Your Input passed validation",
    expected2: "",
  },

  {
    testno: "IVE_003",
    firstname: "AlaÜÖÄüöä",
    surname: "éèÈÉ´ÒáÁàÀøØåÅ",
    age: 19,
    country: "Côte d'Ivoire",
    note: "Umlauts & Co",
    expected1: "Your Input passed validation",
  },
  {
    testno: "IVE_003A",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 19,
    country: "CÃ´te d'Ivoire",
    note: "Umlauts & Co",
    expected1: "Your Input passed validation",
  },
];

let invalidClientValidation = [
  {
    testno: "IVE_004",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 199,
    country: "Canada",
    note: "age > 199",
    expected1: "",
    expected2: "#age:invalid",
  },
  {
    testno: "IVE_007",
    firstname: "",
    surname: "The Lioness",
    age: 39,
    country: "Canada",
    note: "Empty First name",
    expected1: "",
    expected2: "firstname:invalid",
  },

  {
    testno: "IVE_010",
    firstname: "Alanna",
    surname: "ABC",
    age: 39,
    country: "Canada",
    note: "Short surename",
    expected1: "",
    expected2: ".errormessage",
  },
  {
    testno: "IVE_009",
    firstname: "Alanna",
    surname: "The Lioness",
    age: 199,
    country: "Tortall",
    note: "Country not in list",
    expected1: "",
    expected2: "#country:invalid",
  },
];
