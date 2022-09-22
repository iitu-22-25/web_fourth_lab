let e = 12;
console.log("e:");
let ak1=0,ak=2;
let k=1;
while ((ak-ak1)>=e) {
    ++k;
    ak1=ak;
    ak=2+1/ak1;
}
console.log("K:%i\nA(k-1):%f\nAk:%f\n",k,ak1,ak);
