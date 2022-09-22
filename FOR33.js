let k = 10;
console.log("K:");
let f1=1,f2=1;
console.log("F(1)=%i\n",f1);
console.log("F(2)=%i\n",f2);

let i;
for  (i =3; i<=k; ++i){
    f1=f1+f2;
    f2=f1-f2;
    console.log("F(%i)=%i \n",i,f1);
}
