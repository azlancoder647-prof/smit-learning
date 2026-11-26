//chapter 21-25 String methods


//question 1

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);



//question2

// var userInput = prompt("Enter your favorite mobile phone model:");
// var userLength = userInput.length;
// alert("Your favorite phone model is: " + userInput + "\nLength of the string is: " + userLength);

//question3

// var word = "Pakistani";
// var index = word.indexOf("n");
// alert("String: " + word + "\nIndex of 'n': " + index);


//question4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// alert("String: " + word + "\nLast index of 'l': " + lastIndex);


//question5

// var word = "Pakistani";
// var charAtIndex = word.charAt(3);
// alert("String: " + word + "\nCharacter at index 3: " + charAtIndex);

//question6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName);


//question7

// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");
// alert("City: " + city + "\nAfter replacement: " + replacedCity);

//question8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// alert("Original message: " + message + "\nAfter replacement: " + replacedMessage);


//question9

// var stringNumber = "472";
// var number = Number(stringNumber);
// alert("Value: " + stringNumber + "\nType: " + typeof stringNumber + "\n\nValue: " + number + "\nType: " + typeof number);

//question10

// var userInput = prompt("Enter a string:");
// var upperCaseInput = userInput.toUpperCase();
// alert("User input: " + userInput + "\nUpper case: " + upperCaseInput);


//question11

// var userInput = prompt("Enter a string:");
// var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// alert("User input: " + userInput + "\nTitle case: " + titleCaseInput);

//question12

// var num = 35.36;
// var numString = num.toString().replace(".", "");
// alert("Number: " + num + "\nResult: " + numString);


//question13

// var username = prompt("Enter a username:");
// var isValid = true;
// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }
// alert("Username is valid: " + isValid);

//question14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var isAvailable = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         isAvailable = true;
//         break;
//     }
// }
// alert("Item is available: " + isAvailable);
//question15

// var password = prompt("Enter a password:");
// var isValid = true;
// if (password.length < 6) {
//     isValid = false;
// } else if (!/^[a-zA-Z]/.test(password)) {
//     isValid = false;
// } else if (!/[0-9]/.test(password)) {
//     isValid = false;
// } else if (/[^a-zA-Z0-9]/.test(password)) {
//     isValid = false;
// }
// alert("Password is valid: " + isValid);

//question16

// var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


//question17

// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("User input: " + userInput + "\nLast character: " + lastChar);


//question18

// var text = "The quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/gi) || []).length;
// alert("Text: " + text + "\nThere are " + count + " occurrences of the word 'the'.");