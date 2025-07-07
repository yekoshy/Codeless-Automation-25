//https://demoqa.com/date-picker

function SelectAssert(day,month,year){
  document.querySelector("#datePickerMonthYearInput").click()

  setTimeout(()=>{
      // 0- 11
      document.querySelector("select.react-datepicker__month-select").value = month
      document.querySelector("select.react-datepicker__month-select").dispatchEvent(new Event('change',{bubbles:true}))
      //2025
      document.querySelector("select.react-datepicker__year-select").value = year
      document.querySelector("select.react-datepicker__year-select").dispatchEvent(new Event('change',{bubbles:true}))
      setTimeout(()=>{
          document.querySelector("div.react-datepicker__day.react-datepicker__day--0"+day).click()
          setTimeout(()=>{
              console.log(document.querySelector("#datePickerMonthYearInput").value)
              let result = document.querySelector("#datePickerMonthYearInput").value;
              let expectedMonth = Number(month)+1;
              let expected = expectedMonth+'/'+day+'/'+year
              console.assert(result == expected)
          },500)        
      },500)
  },500)

}

