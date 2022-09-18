const from = -999
const to = 999
const number = Math.floor(Math.random() * (to - from) + from);

if (number === 0) {
    console.log("Нулевое число", number)
} else if (number < 0) {
    if (number < -99) {
        if (number % 2 === 0) {
            console.log("отрицательное четное трехзначное", number)
        } else {
            console.log("отрицательное нечетное трехзначное", number)
        }
    } else {
        if (number % 2 === 0) {
            console.log("отрицательное четное двухзначное", number)
        } else {
            console.log("отрицательное нечетное двухзначное", number)
        }
    }
} else {
    if (number > 99) {
        if (number % 2 === 0) {
            console.log("пололжительное четное трехзначное", number)
        } else {
            console.log("пололжительное нечетное трехзначное", number)
        }
    } else {
        if (number % 2 === 0) {
            console.log("пололжительное четное двухзначное", number)
        } else {
            console.log("пололжительное нечетное двухзначное", number)
        }
    }
}