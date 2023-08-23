  //ways to print in javascript
            //console.log("Hello World");
            //alert ("me");
            //document.write("this is document write")
            //javascript console API
            // console.log("Hello World");
            // console.warn("this is warning");
            // console.error("this is an error");
// javascript variable
//what are variable? containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1+number2);
//Data types in javascript
//numbers
var num1=455;
var num2=56.76;
//string
var str1="This is a string";
var str2="this is alse a string";
//objects
var marks={
    ravi:34,
    shubham:78,
    harry:99.43
}
// console.log(marks);
//At a very level there are tow types of data types in javascript
// 1.primitive Data types:undefined,null,numer,string,boolean,symbol
// 2.Reference data types:Arrays and object
var arr=[1,2,3,4,5];
// operators in javascript
// arithematic operator
var a=100;
var b=10;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);
// assignment operators
var c=b;
c+=2;
// console.log(c);
//comparision operator
var x=43;
var y=54;
/*
console.log(x==y);
console.log(x>=y);
console.log(x<=y);*/

// logical operator
// logical And
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)
//logical or
// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)
//logiacal not
// console.log(!false);
// console.log(!true);
///*********function in javascript */
function avg(a,b){
    return (a+b)/2;
}
c1=avg(4,6);
c2=avg(5,9);
// console.log(c1,c2);

// conditional in javascript
var age=34;
/*
if(age>8){
    console.log('You are not a kid');
}
else{
    console.log('Your are a kid');
}*/
///*****loops in javascript*****/////
var arr=[1,2,3,4,5,6,7];
// for loop
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]); 
// }
// arr.forEach(function(element){
//     console.log(element)
// })
/////***while loop *****/
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
/////***do while loop *****/
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);
////******array methods */
let myArr=["fan","camera",34,null,true];
console.log(myArr.length);
//String Methods i javascript
let mylovely="Harry is a good boy good good";
// console.log(mylovely.lenght)
// console.log(mylovely.indexOf("good"))
// console.log(mylovely.lastIndexOf("good"))
// console.log(mylovely.slice(0,5))
d=mylovely.replace("Harry","Rohan");

// console.log(d,mylovely)
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay);

//DOM Manipulation
let elem=document.getElementById('click');
// console.log(elem);
let elemClass=document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].getElementsByClassName.background="yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
tn=document.getElementsByTagName('div')
// console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText="This is a created para";
tn[0].appendChild(createdElement);
//selecting using Query
sel=document.querySelector('.container')
// console.log(sel)
sel=document.querySelectorAll('.container')
// console.log(sel)
// function clicked(){
//     console.log('The button was clicked');
// }
// window.onload=function(){
//     console.log('Ths document was loaded')
// }
// //Events in javascripts
// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log("clicked on container")
// })
// firstcontainer.addEventListener('click',function(){
//     console.log("Click hua")
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("Mouse on Container ")
// })
// Arrow function
// logKaro =()=>{
//     console.log('I am your log')
// }
//settimeout and setInterval
// setTimeout(logKaro,5000);
// clr=setInterval(logKaro,2000);
// use clearInterval/clearTimeout to cancel setInterval/setTimeout
//javascript localstorage
// localStorage.setItem('name','harry')
// localStorage
// =>o/p  Storage{name:"harry",lenght:1}
// localStorage.setItem('name')
// localStorage.clear()
//Json
// Json do not accept single quotes
// obj={name:"harry",length:1}
// jso=JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed =JSON.parse({"name":"harry","length":1})
// console.log(parsed); 