const float_number = 1.5

function return_number(number) {
    if (number <= 0) {
        return -number
    }
    if (number > 0 && number < 2) {
        return number ** 2
    }
    if (number >= 2) {
        return 4
    }
}

const result = return_number(float_number)
console.log(result)