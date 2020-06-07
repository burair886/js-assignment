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

var con = prompt("Enter rupiees to convert in $")
document.write(con * 140)