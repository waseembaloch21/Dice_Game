//chapter1
//Alert

// alert("Thanks For Coming")

//chapter2
//Variable For String

// var firstName = "Waseem";

// var lastName = "Baloch"
 
// console.log("Hello" + " " +  firstName, " " + lastName);

//chapter3
//Variable For Number

// var age = 15

// console.log("age==>",age);

//chapter4
//Variable For Boolean

// var isStudent = true
// console.log("isstudent==>",isStudent);

//chapter5 
// Math Expression For Familiar

// var num = 5 | 5

// console.log(num);

//Chapter6
// UnFamiliar

// var num = 1

// var newNum = num++

// console.log(newNum);

//chapte7
//ELiminating

// var num = 1 + (2 - 3)
// console.log(num);

//chapter 9
//Prompt

// var abc = prompt('')

// console.log(abc);

//chapter10
//IF statement

// var xyz = prompt("")
// if (xyz === "waseem") {
//     alert("Correct")
// }


//Array Method

//Filter Method

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let oddNumber = numbers.filter(num => num % 2 !== 0 )
// console.log(oddNumber);


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let square = numbers.map(num => num * 2 )
// console.log(square);


//  let numbers = [1,2,3,4,5,6,7,8,9,10]
//  let square = numbers.reduce((acc,num) => acc + num ,0 )
//  console.log(square);


// for (let i = 1; i <= 7; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }

// let number = prompt('Enter a Table Number')

// for (let i = 1; i<=10; i++) {
//    let product = number*i
//    console.log(product);    
// }

// let result = document.getElementById('result')
// let count = 0;

// function increament() {
// count++
//    result.textContent = count 
// }

// function reset() {
//    count = 0
//    result.textContent = count 
// }

// function decerease() {
//    count --
//    result.textContent = count 
// }



function checkNumber(userNumber) {
    const randomNumber = Math.ceil(Math.random() * 6);

  
    document.getElementById('user_num').innerText = userNumber;
    document.getElementById('result_num').innerText = randomNumber;

    
    const resultBox = document.getElementById('result_box');
    if (userNumber === randomNumber) {
        resultBox.innerText = 'Congrats! You won!';
        resultBox.style.color = 'green';
    } else {
        resultBox.innerText = 'Sorry! You Lose, Try Again.';
        resultBox.style.color = 'red';
    }
}








