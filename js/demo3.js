function app() {
    return {
        month: "",
        year: "",
        no_of_days: [],
        blankdays: [],

        initDate() {
            let today = new Date();
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
        },
        isToday(date) {
            // console.log(this.month, 'isToday', date);
            const today = new Date();
            const d = new Date(this.year, this.month, date);
            return today.toDateString() === d.toDateString() ? true : false;
        },
        getNoOfDays() {
            // console.log("getNoOfDays", this.month);
            let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
            // console.log(daysInMonth)
            // find where to start calendar day of week
            let dayOfWeek = new Date(this.year, this.month).getDay();
            let daysArray = [];
            let blankdaysArray = [];
            for (var i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }

            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }

            // console.log("daysArray:", daysArray);
            // console.log("blankdaysArray:", blankdaysArray);

            // console.log(daysArray);
            this.blankdays = blankdaysArray;
            this.no_of_days = daysArray;

            // console.log(this.no_of_days)
        },
        nextMonth() {
            if (this.month == 11) {
                this.month = 0;
                this.year++;
            } else {
                this.month++;
            }
            this.getNoOfDays();
        },
    };
}