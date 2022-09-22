let n = 10;
console.log("N:");

let ai=2;
console.log("A(0)=%f\n",ai);
let i;
for  (i =1; i<=n; ++i){
    console.log("A(%i)=%f \n",i,2+1/ai);
    ai=2+1/ai;
}