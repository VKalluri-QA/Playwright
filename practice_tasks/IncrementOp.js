let a = 5; 
let b = a++ + ++a;//5+6
let c = a++ + ++a + ++a + ++a + a++;//7+8+9+10+10
console.log(a);
console.log(b);
console.log(c);