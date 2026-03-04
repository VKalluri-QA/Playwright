let a = 20;
let b = 20;
let c = 20;
if (a===b && b===c && c===a){
    console.log("Is an Equalateral Triangle")
}
else if (a===b || b===c || c===a) {
    console.log("Is an Isosceles Triangle ")
    
} else {
    console.log("Is a Scalene Triangle")
    
}