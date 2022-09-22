let e;
console.log("e:");
let ak1=1,ak=2,ak2;
let k=2;
while ((ak-ak1)>=e) {
    ak2=ak1;
    ak1=ak;
    ak=(ak2+2*ak1)/3;
    ++k;
}
console.log("K:%i\nA(k-1):%f\nAk:%f\n",k,ak1,ak);
