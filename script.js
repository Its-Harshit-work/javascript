console.log("testing");
//Variables in Javascript
//var let const

//var--> scope---Global
//let--> scope---Local
// let aur var same hote hain. Bas inke scope me antar hota hai
//const-->scope-->local--->bas iski value reassign nahi ho sakti
// var age=22;
// console.log(age);
// var num1=10, num2=20;
// console.log(num1+num2);
// console.log(age);
// let num=55;
// console.log(num);
// if(true){
//     let a=20;
//     console.log(a);
// }
// const temp=14;
// console.log(temp);

//Data Types
//numbers
// let num1=3.14;
// let num2=10;
// console.log(num1+num2);

//string
// const firstName="Harshit", secondName='3764rgtfhc';
// console.log(firstName +' '+ secondName);
// console.log(firstName + secondName);
// for(let i=0; i<10; i++){
//     console.log("Harshit" + i);
// }


//Arrow Function in Javascript

//1. Syntax

    ///////Normal function
    function hello(){
        console.log("Hello Ji");
    }
    hello();
    ////////Argument function
    const sayhello=()=>{
        console.log("Arrow wala hello ji");
    }
    sayhello();
// 'arguments' keyword
    const add=(a,b) =>{
        return a+b;
    }
    console.log(add(2,3));

    const adding=(a,b)=>a+b;//one liner function
    console.log(adding(5,7));
//Hoisting
// This keyword