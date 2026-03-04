let marks = 99 ; // Example score value
if (marks >= 90 && marks <= 100) {
    console.log("You got an A!");
} else if (marks >= 80 && marks < 90) {
    console.log("You got a B!");
} else if (marks >= 70 && marks < 80) {
    console.log("You got a C!");
} else if (marks >= 60 && marks < 70) {
    console.log("You got a D!");
} else if (marks >= 0 && marks < 60) {          
    console.log("You got an F!");
}else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}