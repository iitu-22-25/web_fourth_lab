const n = 333;

switch (n/100) {
    case 1:
        console.log("сто ");
        break;
    case 2:
        console.log("двести ");
        break;
    case 3:
        console.log("триста ");
        break;
    case 4:
        console.log("четыреста ");
        break;
    case 5:
        console.log("пятьсот ");
        break;
    case 6:
        console.log("шестьсот ");
        break;
    case 7:
        console.log("семьсот ");
        break;
    case 8:
        console.log("восемьсот  ");
        break;
    case 9:
        console.log("девятьсот  ");
        break;
}

if ((n % 100) / 10 === 1)
    switch (n%100) {
        case 10:
            console.log("десять\n");
            break;
        case 11:
            console.log("одинадцать\n");
            break;
        case 12:
            console.log("двенадцать\n");
            break;
        case 13:
            console.log("тринадцать\n");
            break;
        case 14:
            console.log("четырнадцать\n");
            break;
        case 15:
            console.log("пятнадцать\n");
            break;
        case 16:
            console.log("шестнадцать\n");
            break;
        case 17:
            console.log("семнадцать\n");
            break;
        case 18:
            console.log("восемнадцать\n");
            break;
        case 19:
            console.log("девятнадцать\n");
            break;
    }
else {
    switch ((n%100)/10) {
        case 2:
            console.log("двадцать ");
            break;
        case 3:
            console.log("тридцать ");
            break;
        case 4:
            console.log("сорок ");
            break;
        case 5:
            console.log("пятьдесят ");
            break;
        case 6:
            console.log("шестьдесят ");
            break;
        case 7:
            console.log("семьдесят ");
            break;
        case 8:
            console.log("восемьдесят ");
            break;
        case 9:
            console.log("девяносто ");
            break;
    }

    switch (n%10) {
        case 1:
            console.log("один\n");
            break;
        case 2:
            console.log("два\n");
            break;
        case 3:
            console.log("три\n");
            break;
        case 4:
            console.log("четыре\n");
            break;
        case 5:
            console.log("пять\n");
            break;
        case 6:
            console.log("шесть\n");
            break;
        case 7:
            console.log("семь\n");
            break;
        case 8:
            console.log("восемь\n");
            break;
        case 9:
            console.log("девять\n");
            break;
    }
}