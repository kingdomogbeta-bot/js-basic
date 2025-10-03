function ability() {
const studentName = document.getElementById("studentName").value;
const assignment1 = Number(document.getElementById("assignment1").value);
const assignment2 = Number(document.getElementById("assignment2").value);
const finalExam = Number(document.getElementById("finalexam").value);


if (assignment1 < 0){
     console.log ("please input a number.")
}
if (assignment2 < 0) {
    console.log ("please input a number.")
}
if (finalExam < 0) {
    console.log ("please input a number.")
}


const assignmentAverage = (assignment1 + assignment2) / 2;


const finalGrade = (assignmentAverage  + finalExam )* 0.6;

const hasPassed = finalGrade >= 70;


const isExcellent = hasPassed && finalExam >= 90;


console.log("Student Name:", studentName);
console.log("Final Grade:", finalGrade);
console.log("Passed:", hasPassed);
console.log("Excellent Performance:", isExcellent);

if (hasPassed) {
    alert("Congratulations " + studentName + "! You have passed");
}else {
    alert("Sorry " + studentName + "you are a big fool .. you have failed. you will repeat");
}

document.getElementById("result").innerText = "Student Name: " + studentName + "\nFinal Grade: " + finalGrade + "\nPassed: " + hasPassed + "\nExcellent Performance: " + isExcellent;
}