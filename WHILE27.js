let n = 10;
console.log("N:");
let f1=1,f2=1,f=0,k=2;

while (f<n){
    ++k;
    f=f2+f1;
    f2=f1;
    f1=f;
}
console.log("K:%i\n",k);