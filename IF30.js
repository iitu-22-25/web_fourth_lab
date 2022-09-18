const from = 1
const to = 999
const number = Math.floor(Math.random() * (to - from) + from);

if (number > 99) {
    if (number % 2 === 0) {
        console.log("ничего", number)
    } else {
        console.log("нечетное трехвузначное число", number)
    }
} else {
    if (number % 2 === 0) {
        console.log("четное двузначное число", number)
    } else {
        console.log("ничего", number)
    }
}