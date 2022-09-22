const n = 10;
console.log("N:");
let a1=1,a2=2,a3=3;
console.log("A(1)=%f\n",a1);
console.log("A(2)=%f\n",a2);
console.log("A(3)=%f\n",a3);

let i;
let ak;
for (i =4; i<=n; ++i){
    ak=a3+a2-2*a1;
    console.log("A(%i)=%f \n",i,ak);
    a1=a2;
    a2=a3;
    a3=ak;
}