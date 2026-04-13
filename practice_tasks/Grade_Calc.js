let marks = 50 ; 
let grade;
if (marks >= 90 && marks <= 100) {
    grade = "A" ;
    console.log(`You got , ${grade}`);
} else if (marks >= 80 && marks < 90) {
   git  grade = "B" ;
    console.log(`You got , ${grade}`);
} else if (marks >= 70 && marks < 80) {
     grade = "C";
     console.log(`You got , ${grade}`);S
} else if (marks >= 60 && marks < 70) {
     grade ="D" ;
    console.log(`You got , ${grade}`);
} else if (marks >= 50 && marks < 60) {          
     grade = "E" ;
     console.log(`You got , ${grade}`);
}else if(marks>=30 && marks <50){
    grade = "F";
    console.log(`You got , ${grade}`)
}else if(marks<30){
    console.log("You Failed")
}
else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}