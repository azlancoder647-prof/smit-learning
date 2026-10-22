//------> chapter 4 starts here  Variable names legal and illegal <------

// q1:-  Declare 3 variables in one statement.

// Answer

// var a, b, c;

// console.log(a);
// console.log(b);
// console.log(c);

// q2:- Declare 5 legal & 5 illegal variable names.

// Answer

// 5 legal variable name

// var name = "Azlan shah";

// var _age = 21;

// var $total = 100;

// var userScore1 = 95;

// var x = 1, y = 2, z = 3;

//    5  illegal variable name

// var 1user = "Azlan shah";

// var first-name = "Azlan";

// var user age = 25;

// var function = 10;

// var total#count = 50;

//q3:- Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 
// b)  Variable names can only contain ______, ______, 
// ______ and ______. 
// For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or 
// _____. For example $name, _name or name 
// d) Variable names are case _________ 
// e) Variable names should not be JS _________   

// Answer

// a,b,c,d,e line se hn sir Answer

// document.write("<h1>Rules for naming JS variables</h1>");
//         document.write("<p>Variable names can only contain <b>numbers</b>, <b>letters</b>, <b>$</b> and <b>_</b>. For example <b>$my_1stVariable</b></p>");
//         document.write("<p>Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example <b>$name</b>, <b>_name</b> or <b>name</b></p>");
//         document.write("<p>Variable names are case <b>sensitive</b></p>");
//         document.write("<p>Variable names should not be JS <b>keywords</b></p>");

//------> chapter 4  end here Variable names legal and illegal <------

// ---->chapter 5 math expression<----

// q1:- Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Answer

// var a=3;
// var b=5;
// var res= a+b;
// document.write("sum of " + a + " and " + b + " is " + res);


// q2:- Repeat task1 for subtraction, multiplication, division &
// modulus.


// Answer


// var a=5;
// var b=3;
// var res= a-b;

// document.write( res);

// var a=5;
// var b=3;
// var res= a*b;
// document.write(res);

// var a=5;
// var b=3;
// var res= a/b;
// document.write(res);

// var a=5;
// var b=3;
// var res= a%b;
// document.write(res);

//q3:- Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value 


// Answer

// a,b,c,d,e,f,g,h,i,j,k,l ke Answers line se hn sir

// var num;

// document.write("Value after variable declaration is " + num + "<br>");

// num = 5;

// document.write("Initial value: " + num + "<br>");

// num++;

// document.write("Value after increment is: " + num + "<br>");

// num = num + 7;

// document.write("Value after addition is: " + num + "<br>");

// num--;

// document.write("Value after decrement is: " + num + "<br>");

// var remainder = num % 3;

// document.write("The remainder is: " + remainder + "<br>");

// q4:- Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// Answer

// var movie_ticket=600;

// var total=movie_ticket*5;

// document.write("Total cost to buy 5 tickets to a movie is" + total);

// console.log(total);

// q5:- Write a script to display multiplication table of any
// number in your browser. E.g


// Answer


// var num = 4;

//         document.write("Table of " + num + "<br>");
//         document.write(num + "x1=" + (num * 1) + "<br>");
//         document.write(num + "x2=" + (num * 2) + "<br>");
//         document.write(num + "x3=" + (num * 3) + "<br>");
//         document.write(num + "x4=" + (num * 4) + "<br>");
//         document.write(num + "x5=" + (num * 5) + "<br>");
//         document.write(num + "x6=" + (num * 6) + "<br>");
//         document.write(num + "x7=" + (num * 7) + "<br>");
//         document.write(num + "x8=" + (num * 8) + "<br>");
//         document.write(num + "x9=" + (num * 9) + "<br>");
//         document.write(num + "x10=" + (num * 10) + "<br>");

// q6:- The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 


// Answer

// a,b,c,d ke line se hn sir Answers

// Celsius to Fahrenheit
// var celsiusTemp = 25;
// var fahrenheitResult = (celsiusTemp * 9) / 5 + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitResult + "°F<br>");

// Fahrenheit to Celsius
// var fahrenheitTemp = 77;
// var celsiusResult = ((fahrenheitTemp - 32) * 5) / 9;
// document.write(fahrenheitTemp + "°F is " + celsiusResult + "°C");


// q7:- Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.


// Answer


// var item1Price = 650;
// var item2Price = 100;
// var item1Qty = 3;
// var item2Qty = 7;
// var shippingCharges = 100;

// var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Qty + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Qty + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);


// q8:-  Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Answer

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");


// q9:-  Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Answer

// var totalPKR = (10 * 104.80) + (25 * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + totalPKR);


// q10:- Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// Answer


// var initialNum = 5;
// var result = ((initialNum + 5) * 10) / 2;



// q11:- The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.


// Answer


// var currentYear = 2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("They are either " + age2 + " or " + age1 + " years old.");

// q12:- The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// Answer


// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);



// q13:- The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// Answer


// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;

// var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + amountPerDay + "<br>");
// document.write("You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge);

// ---->chapter 5 ends here math expression<----


// ---->chapter 6,7 starts here math expression<----


// q1:- Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// Answer

// var a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("................................................<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");



// q2:- What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// Answer


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result);


// Age total 3 Question bache hn sir  lekin me apko bta du unki numbering ghlt hn pdf me hn wo 3 Questions hi or is pdf me mix hn chapter 6,7,8,9 tu wo 3 sawal 
// mujhe 8,9 chapters ke lg rahe hn kyu ke on questions me wo sb pocha gya hn jo abhi tk hm ne nh perha
// tu in sha allah agli class me jb hm wo sb perh le ge tu wo 3 question bhi kr lege ik naye assignment me 
