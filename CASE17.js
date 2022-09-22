
const n = 11;
console.log("кол-во:") ;

if (n / 10 === 1)
    switch (n) {
        case 10:
            console.log("десять учебных заданий. \n");
            break;
        case 11:
            console.log("одинадцать учебных заданий.\n");
            break;
        case 12:
            console.log("двенадцать учебных заданий.\n");
            break;
        case 13:
            console.log("тринадцать учебных заданий.\n");
            break;
        case 14:
            console.log("четырнадцать учебных заданий.\n");
            break;
        case 15:
            console.log("пятнадцать учебных заданий.\n");
            break;
        case 16:
            console.log("шестнадцать учебных заданий.\n");
            break;
        case 17:
            console.log("семнадцать учебных заданий.\n");
            break;
        case 18:
            console.log("восемнадцать учебных заданий.\n");
            break;
        case 19:
            console.log("девятнадцать учебных заданий.\n");
            break;
    }
else {
    switch (n/10) {
        case 2:
            console.log("двадцать ");
            break;
        case 3:
            console.log("тридцать ");
            break;
        case 4:
            console.log("сорок ");
            break;
    }

    switch (n%10) {
        case 1:
            console.log("одно ");
            break;
        case 2:
            console.log("два ");
            break;
        case 3:
            console.log("три ");
            break;
        case 4:
            console.log("четыре ");
            break;
        case 5:
            console.log("пять ");
            break;
        case 6:
            console.log("шесть ");
            break;
        case 7:
            console.log("семь ");
            break;
        case 8:
            console.log("восемь ");
            break;
        case 9:
            console.log("девять ");
            break;
    }

    switch (n%10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log("учебных заданий.\n");
            break;
        case 1:
            console.log("учебное задание.\n");
            break;
        case 2:
        case 3:
        case 4:
            console.log("учебных задания.\n");
            break;
    }
}
