const y = 23;
console.log("Возраст:") ;

switch (y/10) {
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
        console.log("пятдесят ");
        break;
    case 6:
        console.log("шестьдесят ");
        break;
}

switch (y%10) {
    case 1:
        console.log("один ");
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

switch (y%10) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("лет.\n ");
        break;
    case 1:
        console.log("год.\n ");
        break;
    case 2:
    case 3:
    case 4:
        console.log("года.\n ");
        break;
}

