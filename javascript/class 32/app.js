// ---->chapter 8,9 Starts here <----


// sir me question number exact wohi daal raha hu jo pdf me hn 4 and 7 nh hn question pdf me sir number dale hoe hn tu wo bhi bta raha hu

// Q3:- 3. Write a program that takes input a name from user &
// greet the user.


// Answer

// var name = prompt("Enter your name:");
// document.write("Hello " + name + "! Welcome.");

// Q5: 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// Answer

// var num = prompt("Enter a number:");

// if (num === null || num.trim() === "") {
//     num = 5;
// } else {
//     num = Number(num);
// }

// document.write("<h2>Table of " + num + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

// Q6: 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// Answer

// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");

// var totalMarksPerSubject = 100;

// var marks1 = Number(prompt("Enter obtained marks in " + sub1 + ":"));
// var marks2 = Number(prompt("Enter obtained marks in " + sub2 + ":"));
// var marks3 = Number(prompt("Enter obtained marks in " + sub3 + ":"));

// var totalMarks = totalMarksPerSubject * 3;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h2>Student Result</h2>");

// document.write("<table border='1' cellpadding='8'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

// document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");

// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th></tr>");
// document.write("</table>");

// document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");


// ---->chapter 8,9 Ends here <----