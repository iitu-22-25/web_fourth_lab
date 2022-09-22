let a,b,c = 10;
console.log("A:");

console.log("B:");

console.log("C:");

let k=0;
let temp;
while ((a-c)>=0) {
    a-=c;
    temp=b;
    while (temp-c>=0){
        temp-=c;
        ++k;
    }
}
console.log("K:%i\n",k);
