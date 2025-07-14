setTimeout(() => {
    const datePickerTrigger = document.querySelector("#datePickerMonthYearInput");
    if (datePickerTrigger) {
        datePickerTrigger.click();

        setTimeout(() => {
            const monthSelect = document.querySelector(".react-datepicker__month-select");
            const yearSelect = document.querySelector(".react-datepicker__year-select");
            const daySelect = document.querySelector(".react-datepicker__day-select");
            const targetMonth = "7";
            const targetYear = "2019";

            if (monthSelect && yearSelect) {

                monthSelect.value = targetMonth;
                monthSelect.dispatchEvent(new Event("change", {
                    bubbles: true
                }));

                yearSelect.value = targetYear;
                yearSelect.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
                const day8 = document.querySelector(".react-datepicker__day--008:not(.react-datepicker__day--outside-month)");
                if (day8) day8.click();

                setTimeout(() => {
                    const dayTarget = document.querySelector("#dateAndTimePickerInput");
                    if (dayTarget) {
                        dayTarget.click();

                        setTimeout(() => {
                            const timePickerTrigger = document.querySelector("#dateAndTimePicker > div");
                            if (timePickerTrigger) {
                                timePickerTrigger.click();

                                setTimeout(() => {

                                    const timeList = document.querySelector("#dateAndTimePicker ul.react-datepicker__time-list");
                                    if (timeList) {
                                        const targetTime = Array.from(timeList.children).find(li =>
                                            li.textContent.trim() === "10:00"
                                        );

                                        if (targetTime) {
                                            targetTime.click();
                                        }
                                    }
                                }, 300);
                            }
                        }, 300);

                    }
                }, 2000);
            }

        }, 500);

    }
}, 500);
