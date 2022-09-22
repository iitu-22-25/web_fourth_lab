let n = 10;
console.log("N:");
let f1=1,f2=1,f=0;

while (f<n){
    f=f2+f1;
    f2=f1;
    f1=f;
}
console.log("F_k-1=%i\nF_k+1=%i\n",f2,f1+f2);
