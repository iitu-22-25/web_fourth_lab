let n = 10;
console.log("N:");
let a1=1,a2=2;
console.log("A(1)=%f\n",a1);
console.log("A(2)=%f\n",a2);

let i;
let ak;
for  (i =3; i<=n; ++i){
    ak=(a1+2*a2)/3;
    console.log("A(%i)=%f \n",i,ak);
    a1=a2;
    a2=ak;
}