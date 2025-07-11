// calendar at https://practice-automation.com/calendars/
//site-specific constants

const calendarInput = document.querySelector("#g1065-2-1-selectorenteradate"); //input field
const calendarMonth = document.querySelector(".ui-datepicker-month"); //Month display in open datepicker
const calendarYear = document.querySelector(".ui-datepicker-year"); // year display in open datepicker

const basicPagingLocator = ".ui-datepicker-"; //constant part of locator for paging months
const suffixPrev = "prev";
const suffixNext = "next";

testcases = [
  "2025-07-05",
  "2020-01-31",
  "1999-12-04",
  "1967-01-01",
  "2030-01-01",
  "2031-02-29",
];

function extractYearMonthDay(date) {
  yearFromDate = date.toLocaleDateString("en-US", { year: "numeric" }); //extract year from date
  monthFromDate = date.toLocaleDateString("en-US", { month: "long" }); // extract month from date
  monthFromDateNum = date.toLocaleDateString("en-US", { month: "numeric" });
  dayFromDate = date.toLocaleDateString("en-US", { day: "numeric" }); //extract year from date
  checkDate = {
    year: yearFromDate,
    monthText: monthFromDate,
    month: monthFromDateNum,
    day: dayFromDate,
  };
  return checkDate;
}

function assertDateDisplay(checkdate) {
  console.assert(
    document.querySelector(".ui-datepicker-year").innerText == checkdate.year,
    `Expected ${checkdate.year}, found ${
      document.querySelector(".ui-datepicker-year").innerText
    }`
  );
  console.assert(
    document.querySelector(".ui-datepicker-month").innerText ==
      checkdate.monthText,
    `Expected ${checkdate.monthText}, found ${
      document.querySelector(".ui-datepicker-month").innerText
    }`
  );
}

function setDateInCalendar(currCheckdate, setDate) {
  let monthsOffset =
    (setDate.year - currCheckdate.year) * 12 +
    (setDate.month - currCheckdate.month);
  console.log(monthsOffset);
  let pageButton =
    monthsOffset < 0
      ? basicPagingLocator + suffixPrev
      : basicPagingLocator + suffixNext;

  monthsOffset = Math.abs(monthsOffset);
  for (let x = 1; x <= monthsOffset; x++) {
    setTimeout(document.querySelector(pageButton).click(), 100);
  }
  assertDateDisplay(setDate);
  let dayDay = setDate.day;
  const dayLocator = `[data-handler="selectDay"] [data-date="${dayDay}"]`;

  setTimeout(
    document.querySelector(dayLocator).click(),
    100 * monthsOffset + 100
  );
  assertDateDisplay(setDate);
}

function testDatePicker(testcase) {
  console.log(`testcase: ${testcase}`);
  let currDate =
    calendarInput.value == "" ? new Date() : new Date(calendarInput.value);
  console.log(`currDate = ${currDate}`);
  const currCheckdate = extractYearMonthDay(currDate);
  const setDateRaw = new Date(testcase);
  const setDate = extractYearMonthDay(setDateRaw);
  console.log(setDate);

  calendarInput.dispatchEvent(new Event("focus", { bubbles: true }));

  //setTimeout(assertDateDisplay(currCheckdate),50);
  setDateInCalendar(currCheckdate, setDate);

  console.assert(
    calendarInput.value == testcase,
    `Expected ${testcase}, found ${calendarInput.value}`
  );
  console.log(`testcase ${testcase} executed`);
}
//uncomment next line to execute all tests
//testcases.forEach((testcase)=> testDatePicker(testcase))
