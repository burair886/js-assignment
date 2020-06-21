/*//chapter #1
//Q1. Write a script to greet your website visitor using JS alert box.
alert("this is a alert ")

//2. Write a script to display following message on your web page: 
alert("Error! Please enter a valid password")

//3. Write a script to display following message on your web page: (Hint : Use line break
alert("welcome to js Land...\n Happy coding")

//4. Write a script to display following messages in sequence:
alert("Happy coding \n Prevent this page for aditional dialogs") 

//5. Generate the following message through browser’s developer console: 
alert("Hello...I can run JSthroughmy web browser's console")*/

/*chapter #2
 
Page 1 of 3  
1. Declare a variable called username.
2. Declare a variable called myName & assign to it a string that represents your Full Name.
3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.*/ 
/*var username
var myname = "Syed Burair Hussain Zaidi"
alert(myname)
var message = "Hello World"
alert(message)
alert("message")
var studentage =prompt('Enter your age')
alert("Age is" +  studentage)*/



/*var m, n,pizza;
for(m=1;m<=5;m++)
{
for(n=5;n>=m;n--)
{
document.write(pizza);
}
document.write("<br/>");
}*/
//5. Write a script to display the following alert using one JS variable: 
/*var i, j;
for(i=5;i>=1;i--)
 {
  for(j=1;j<=i;j++)
 {
   document.write('pizza');
   
  }
   document.write('<br/>');
 }*/

 //6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
 /*var email = "Zburair5@gmail.com"
 alert("my email is " + email)*/ 

 
//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
/*var book = "I'm tring to learn from book. A smarter way to learn JavaScript"
alert(book)*/

//8. Write a script to display this in browser through JS
//document.write('Yah! I can write HTML content throught JavaScript')

//9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
//alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//chapter #3
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
/*var age =21
alert("I am" +  age  +  "years old")*/ 

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

/*var birthYear = 1998
document.write("my birth year is" + birthYear)*/

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

/*var  Visitorsname = "John Doe";
var  Producttitle = "5 T-shirt(s)"
document.write(Visitorsname + "ordered" + Producttitle + " on XYZ Clothing store") */

//chapter #4

/*1. Declare 3 variables in one statement.
2. Declare 5 legal & 5 illegal variable names. 
3. Display this in your browser 
a)  A heading stating “Rules for naming JS variables” 
b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
d) Variable names are case _________ e) Variable names should not be JS _________   */

/*var a,b,c

document.write(" Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable")
document.write("Variables must begin with a ______, ______ or _____. For example $name, _name or name \n")
document.write("Variable names are case _________ e) Variable names should not be JS _________\n")*/

//chapter #5

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

/*var a = prompt("enter first number")
var b = prompt("enter second number")
var fun = prompt("enter  function")
if(fun === '+'){
  alert( (+a) + (+b) )
}
else if(fun === '-'){
  alert( a - b )
}
else if( fun === '*'){
  alert( a * b )
}
else if( fun === '/'){
  alert( a / b)
}*/

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

/*var cost = 600
var a = prompt("how many tickets do you req?")
var c = cost * a
alert("Total cost of by" + a + "tickets is" + c)*/

//5. Write a script to display multiplication table of any number in your browser. E.g
    
/*var i
var num = prompt("Enter a number to print the table:")
for(i=1;i<=10;i++){
  document.write(num + "x" + i + "=" + num*i + "<br>")
}*/

 
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”

/*var f = 70
var c = 25
var b = ((c * 5/9) + 32)
var a = (5/9) * (f-32)
document.write(f + '' + "F" + ' ' + "is" + ' ' + a + "C" + "<br>")
document.write(c + '' + "c" + ' ' + "is" + ' ' + b + "F")*/

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
//Compute the total cost & show the receipt in your browser.

/*var a = prompt("Enter price of item 1"  )
document.write("Price of item 1 is" + ' ' + a + ' ' + "<br/>")
var b = prompt("Enter Quantity of item 1")
document.write("Quantity of item 1 is" + ' ' + b + "<br>")
var c = prompt("Enter price of item 2" + "<br>" )
document.write("Price of item 2 is" + ' ' + c + ' ' + "<br/>")
var d = prompt("Enter Quantity of item 2")
document.write("Quantity of item 2 is" + ' ' + d + "<br>")
document.write(`Total = ${(+a) + (+b) + (+c) + (+d)}`)*/

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

/*var marks = prompt("Enter your obtained Marks")
document.write("Obtained Marks" + ' ' + marks + "<br>")
var Total = prompt("Enter your Total Marks")
document.write("Total Marks" + ' ' + Total + "<br>")
var c = (marks/Total*100)
document.write("Percentage is" + ' ' + c +  ' ' + "%" )*/

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

/*var con = prompt("Enter rupiees to convert in $")
document.write(con * 140)*/

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

/*var a = 400
document.write( (a + 5 * 10)/2 )*/

 
// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”

/*var DOB = March 1, 1995
var millisecbetweenDOBand1970 = Date.parse(DOB)
var millisecbetweennowand1970 = Date.now();
var ageinmillisec = millisecbetweennowand1970-millisecbetweenDOBand1970;
var millisec = ageinmillisec;
var second = 1000;
var min = second*60;
var hour = min*24
var day = hour*24
var month = day*30
var year = day*365
var year = Math.round(millisec/year)
var months = years*12
var days = years*365
var hours = Math.round(millisec/hour)
var seconds = Math.round(milliseconds/second);
function printresult(){
  var message = "Age in years : "  +years+
  "<br> Age in Months : "+months+
  "<br> Age in Days : "+days+
  "<br> Age in Hours : "+hours+
  "<br> Age in Seconds : "+seconds+
  "<br> Age in Milliseconds : "+milliseconds+
  document.write(printresult)
   
}
window.onload = printresult;*/

//chapter #6
//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// document.write("a is" + a + "<br>")
// document.write("b is " + b + "<br>")
// document.write("Result is" + result)


//6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 

// var eng = prompt("Enter total marks of English")
// var phy = prompt("Enter total marks of Physics")
// var math = prompt("Enter total marks of Math")
// document.write("Total Marks of English is" + eng + "<br>")
// document.write("Total Marks of Physics is" + phy + "<br>")
// document.write("Total Marks of Math is" + math + "<br>")
// var engobt = prompt("Enter Obtained marks of English")
// var phyobt = prompt("Enter Obtained marks of Physics")
// var mathobt = prompt("Enter Obtained marks of Math")
// document.write("Obtained Marks of English is" + engobt + "<br>")
// document.write("Obtained Marks of Physics is" + phyobt + "<br>")
// document.write("Obtained Marks of Math is" + mathobt + "<br>")

// document.write("Total Marks is" + (+eng) + (+phy) + (+math))
// document.write("Obtained Marks is" + (+engobt) + (+phyobt) + (+mathobt))

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("Enter a city name")
// if(city === "karachi"){
//   alert("Welcome to the city of lights")
// }

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

// var m = prompt("enter gender")
// if(m === "male"){
//   alert("hello sir")
// }else if(m === "female")
//   {alert("hello mam")}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car

// var fuel = prompt("Enter current fuel in your car")
// if(fuel < 0.25){
//   alert("Please refill the fuel in your car")
// }
// else{
//   alert("Fuel is OK")
// }

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 

//  var a = 4; 
// if (++a === 5)
// { 
//   alert("given condition for variable a is true"); 
// }
// var b = 82;
// if (b++ === 83)
// { 
//    alert("given condition for variable b is true"); 
// }
// var c = 12;
// if (c++ === 13){ 
//   alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//   alert("condition 2 is true"); 
// } 
// if (++c < 14){
//    alert("condition 3 is true"); 
// } 
// if(c === 14){
//    alert("condition 4 is true"); 
// } 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//    alert("The cost equals"); 
// } 
// if (true){ 
//   alert("True");
// } 
// if (false){ 
//   alert("False"); 
// }
// if("car" < "cat"){ 
//   alert("car is smaller than cat"); 
// } 

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

// var sec = "5"
// var a = prompt("Enter a number between 1 to 10 ")
// if(a === sec){
//   alert("Bingo! Correct answer")
// }else if (a === "4"){
//   alert("Close enough to the correct answer")
// }else if( a === "6"){
//   alert("Close enough to the correct answer")
// }
// else {
//   alert("Wrong answer")
// }



// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var a = prompt("Enter a number ")
// if( "a / 3 ===0"){
//   alert("number is divisiable by 3")
// }else {
//   alert("not")
// }

// 9. Write a program that checks whether the given input is an even number or an odd number. 

// var a = prompt("Enter a number ")
// if( a / 2 == 0){
//   alert("number is even")
// }else {
//   alert("number is odd")
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// var T = prompt("Enter Temperature");
// if( T > 40 ){
//   alert( " “It is too hot outside.” ");
// }else if(T > 30){
//   alert(" “The Weather today is Normal.”");
// }


// chapter 12-13
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// var ch = prompt("enter an alphabet")
// if (ch >= 'A' && ch <= 'Z'){ 
//         alert(" is an UpperCase character\n"); 
// }  
//     else if (ch >= 'a' && ch <= 'z'){ 
//     alert(" is an LowerCase character\n");               
// }  
// else{
//     alert(" is not an aplhabetic character\n");
// }    


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var a, b;
// a = (prompt("Enter first number "));
// b = (prompt("Enter Second number"));
// cas_1 = a > b;
// cas_2 = a < b;
// if (cas_1 == true){

// while(cas_1 == true){
// alert("A is max with this number " + ''+ a);
// break;
// }

// }else{
// alert("B is with this number " + '' + b );
// }

//  3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num=prompt("Enter a number: ");
// if(num == 0.0){
//   if(num == 0.0){
//     alert("you enter zero")
//   }else {
//     alert("you enter a - num")
//   }
// }else{
//   alert("you enter + num")
// }

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var num = prompt("enter a single alphabet")
// if(num === a || e ||i || o || u ){
//   alert(true)
// }else  {
//   alert(false)
// }


// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwis
// var a = prompt("enter current password");
// if ( a=== ' '){
//   alert("please enter password")
// }break;
// var b = prompt("Enter new password")
// var c = prompt("enter again")
// if(b===c){
//   alert("password is correct")
// }else{
//   alert("you enter a wrong password")
// }

// 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; 

var greeting;
var hour = 13; 
if (hour < 18) { 
  greeting = "Good day";
}else{ 
   greeting = "Good evening"; 
}   
