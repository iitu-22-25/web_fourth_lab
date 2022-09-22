const year = 2000

days_in_usual_year = 365
days_in_leap_year = 366

if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log(366)
    } else {
        console.log(365)
    }
} else if (year % 4 === 0) {
    console.log(366)
} else {
    console.log(365)
}
