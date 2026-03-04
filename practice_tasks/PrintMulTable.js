// multiplication table from 1 to 10
//for loop
for(let i = 1;i<=10;i++){
    for(let j=1;j<=10;j++){
         mult=i*j;
         console.log(i+"*"+j+"="+" "+mult);
    }
}



//while loop
let m=1;

let mltply;
while(m<=10){   
    let n=1;
    while(n<=10){ 
        mltply=m*n;
         console.log(m+"*"+n+"="+" "+mltply);
         n++;
    }
    m++;
}
