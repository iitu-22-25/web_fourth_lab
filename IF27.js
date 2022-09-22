const float_number = 2

function calculate(number) {
    if (number <= 0) {
        return 0
    }
    if (number % 2 === 0) {
        return 1
    } else {
        return -1
    }
}

const result = calculate(float_number)
console.log(result)