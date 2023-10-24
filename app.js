// // const scores = [10, 20, 30, 40, 50]

// // for (let i = 0; i < scores.length; i++){
// //     console.log(scores[i] * 2)
// // }

// // function myArray(arr){
// //     let sum = 0;
// //      for(let i = 0; i < arr.length; i++){
// //          sum += arr[i];
// //     }
// //     return sum;
// // }

// // result= myArray([10, 20, 30, 40, 50])
// // console.log(result);


// // function sumTwo(sum1, sum2){
// //     let sum = sum1 + sum2;
// //     

// // return sum;
// // }

// // result = sumTwo(20, 30);
// // console.log(result);


// // function myArray(arr){
// //     let count = 0;
// //     let num = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         if (arr[i] == true){
// //             count ++;
// //         }
// //         else{
// //             (arr[i] == false)
// //             num++;
// //         }
// //     }
// //     return [count, num];
// // }
// //  console.log(myArray([true,true,false,true,true]));



// // const obj ={
// //     firstName: "Henry",

// // }

// // function newList(list){
// //   let name;
// //     for(i in list){
// //         if(list.includes("femi")){
            
// //         }
// //         else if(list.includes("femi") != true){
// //             return "not"
// //         }
// //     }
    
// // }
// // console.log(newList(["rasaq","ade","lookman"]));


// // function myArray(arr){
// //     const newarr = [];
// //     for(let i = 0; i < arr.length; i++){
// //       arr[i] * 2;
// //         newarr*arr;
// //     }
// //    return newarr;
// // }

// // result = myArray([10, 20, 30, 40, 50]);
// // console.log(result);

// // let myParagraph = document.querySelector("#para")
// // //let myInput = document.getElementById("email-value");

// // function myFunction(){
// //     myParagraph.innerHTML += "i have changed !!!";
// // }

// // myParagraph.addEventListener("click", myFunction);


// // let mySubmit = document.querySelector("#submit");
// // mySubmit.addEventListener("click", myFunction )
// // function myFunction(){
// //     let myMail = document.querySelector("#email");
// //     let myPassword= document.querySelector("#password");
// //     let myPara1= document.querySelector("#mypara");
// //     myPara1.innerHTML= `my email is ${myMail.value} and my password is ${myPassword.value}`;
// // }




// let myAdd = document.querySelector("#increase-button");
// myAdd.addEventListener("click", myFunction);

// let mySubtract = document.querySelector("#decrease-button");
// mySubtract.addEventListener("click", myFunction2);

// let myParaa = document.querySelector("#firstpara");
// let count = 0;

// function myFunction(){

   
//     if(count < 100){
//         count++;
//     }
//     myParaa.innerHTML = count;
    
// }

// function myFunction2(){

//     if(count > 0){
//     count--;
//     }
//     myParaa.innerHTML =  count;
// }

//tenary operators
// age = 20;
// age < 20 ? console.log("hi") : console.log("crazy")

//unary operators

// function isDivisbleByN(arr, n){
// const divideValue =[];
// for(i = 0; i < arr.length; i++){
//   if(arr[i] % n === 0){
//     divideValue.push(arr[i]);
    
//   }
 
// }
// return  divideValue;
// }

// console.log(isDivisbleByN([12, 4, 5, 6, 22], 7));

// function sum(num1, num2){
//   console.log(num1 + num2);

// }
// sum (3,5);


//rest parameter
// function sum(...numbers){
//   let result= 0
//   for(let i=0; i < numbers.length; i++){
//     result += numbers[i]
//   }
//   return result
// }
// console.log(sum(2,3,4,5))

//for loop
// function sum(...numbers){
//   let result= 0
//   for(let num of numbers ){
//   result += num
//   }
//   return result
// }
// console.log(sum(2,3,4,5))

// function maxValue(arr){
// let arr1= Math.max(arr);

// return arr1
// }

// console.log(maxValue(Math.max(2, 3, 4, 5, 6)));

 
function multiplyValues(arr){
  
  let array = []
  let newarr =[]
  for(let i=0; i < arr.length; i++){
    array.push(arr[i] * 2);
  }
 newarr=[...array.slice(0, 1),...array]
  return newarr;
  ;
  
}
console.log(multiplyValues([1, 2, 3, 4]))




