let correctAnswer = 5 ;
let userGuessnumber = prompt("enter a number between 1 to 10");


if (userGuessnumber == 5){
    alert("your answer is correct Congratulation")
} else if (userGuessnumber == 1){
    alert("your guess number is too small try 1 or 2 greater number")
} else if (userGuessnumber == 2){
    alert("your guess is too small try greater number")
} else if (userGuessnumber == 3){
    alert("your guess number is too small try maybe 2 more could possibly a correct number")
}else if (userGuessnumber == 4){
    alert("your so closed to be a correct guess")
} else if (userGuessnumber == 6){
    alert("no no try small number")
} else if (userGuessnumber == 7){
    alert(" no try small number please")
} else if (userGuessnumber == 8){
    alert("try smaller number")
} else if (userGuessnumber == 9){
    alert("no no i give you a hint try smaller")
} else if (userGuessnumber == 10){
    alert("your on edge try small number")
} else if (userGuessnumber >= 11 && userGuessnumber <= 19){
    alert("i tell you in the range of 1 to 10 what are you doing man")
} else if (userGuessnumber >= 20 && userGuessnumber <= 29){
    alert("seriously man in the range of 20 seriously try in the range of 1 to 10")
} else if (userGuessnumber >= 30 && userGuessnumber <= 39){
    alert("oh my god i can tell you dont read intruction in the range of 10 man in the range of 10 did you heard me")
} else if (userGuessnumber >= 40 && userGuessnumber <= 49){
    alert("i'm done with you bro i'm done with you trrry small value in the range of 10 , 1 to 10 bro")
} else if (userGuessnumber >= 50 && userGuessnumber <= 100){
    alert("are you crazy")
} else if (userGuessnumber >= 100){
    alert("i'm not talking to you you don't listening to me")
} else if (isNaN(userGuessnumber)){
    alert("bro number likho yeh kia alphabet likh rahe hu")
} else if (userGuessnumber === null || userGuessnumber.trim() === "") {
    alert("mene bola tha kuch likho nh likha na kuch bhi cancel kr dia na thik hn bhai thik");
}