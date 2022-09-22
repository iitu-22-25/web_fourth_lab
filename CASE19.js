const n = 2022;

let res = ""

switch ((n)%10) {
    case 0:
    case 1:
        res = "бел";
        break;
    case 2:
    case 3:
        res = "черн";
        break;
    case 4:
    case 5:
        res = "зелён";
        break;
    case 6:
    case 7:
        res = "красн";
        break;
    case 8:
    case 9:
        res = "жёлт";
        break;
}

switch ((n+1)%5) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 9:
    case 10:
    case 11:
        res = res + "ой ";
        break;
    case 6:
    case 7:
    case 8:
        res = res + "ого ";
        break;
}

switch ((n+8)%12) {
    case 0:
        console.log(res)
        console.log("крысы\n");
        break;
    case 1:
        console.log(res)
        console.log("коровы\n");
        break;
    case 2:
        console.log(res)
        console.log("тигра\n");
        break;
    case 3:
        console.log(res)
        console.log("зайца\n");
        break;
    case 4:
        console.log(res)
        console.log("дракона\n");
        break;
    case 5:
        console.log(res)
        console.log("змеи\n");
        break;
    case 6:
        console.log(res)
        console.log("лошади\n");
        break;
    case 7:
        console.log(res)
        console.log("овцы\n");
        break;
    case 8:
        console.log(res)
        console.log("обезьяны\n");
        break;
    case 9:
        console.log(res)
        console.log("курицы\n");
        break;
    case 10:
        console.log(res)
        console.log("собаки\n");
        break;
    case 11:
        console.log(res)
        console.log("свиньи\n");
        break;
}
