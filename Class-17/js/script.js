//document.write('hello asad and ife');

//document.getElementsByTagName("div")[0].innerHTML = "Riyad vai miss you";
//
//document.getElementsByClassName("demo")[0].style = " background: green; text-align: center; height: 300px; width: 500px; line-height: 300px; margin: 0 auto; font-family: sans-serif; font-size: 40px; text-transform: uppercase; color: white; ";

//document.getElementsByClassName("demo")[1].style = " background: blue; text-align: center; height: 300px; width: 500px; line-height: 300px; margin: 0 auto; font-family: sans-serif; font-size: 40px; text-transform: uppercase; color: white; ";

document.getElementsByClassName("demo")[2].style = " background: red; text-align: center; height: 300px; width: 500px; line-height: 300px; margin: 0 auto; font-family: sans-serif; text-transform: uppercase; color: white; ";

document.getElementsByTagName("form")[0].style = " background: white; text-align: center; height: 50px; width: 500px; line-height: 50px; margin: 10px auto; font-family: sans-serif; font-size: 20px; text-transform: uppercase; color: white; display: flex; justify-content: space-around; ";

document.getElementsByTagName("select")[0].style = " background: white; text-align: center; height: 50px; width: 200px; line-height: 50px; font-family: sans-serif; font-size: 20px; font-weight: 700; text-transform: uppercase; color: green; display: flex; justify-content: space-around; ";

document.getElementsByTagName("select")[1].style = " background: white; text-align: center; height: 50px; width: 200px; line-height: 50px; font-family: sans-serif; font-size: 20px; font-weight: 700; text-transform: uppercase; color: green; display: flex; justify-content: space-around; ";

document.getElementsByTagName("select")[2].style = " background: white; text-align: center; height: 50px; width: 200px; line-height: 50px; font-family: sans-serif; font-size: 20px; font-weight: 700; text-transform: uppercase; color: green; display: flex; justify-content: space-around; ";
//
//document.getElementById("demo").innerHTML = " Come back soon ";


//var a = 30;
//var b = 30;
//
//if (a > b){
//    document.write("a is big"+"<br>");
//}
//else if (a < b){
//    document.write("b is big"+"<br>");
//}
//else if(a==b){
//    document.write("both are equal"+"<br>");
//}
//else {
//    document.write("Condition is false");
//}


var email = "ifte420@gmail.com";
var password = 170197;

var user_email = prompt("Enter your email");
var user_pass = prompt("Enter your passward");

if(email==user_email && password==user_pass){
    document.getElementById("login").innerHTML = "Welcome to Home page";
}
else {
    document.getElementById("login").innerHTML = "Dhur mia vul disso keno";
}

//
//for(i=15; i > 10 && i < 20; i++){
//    //document.write(i + ". " + "I like U" + " " + "I miss U" + "<br>");
//    document.write(i + "<br>");
//}
//
//var i = 5;
//
//while(i > 10 && i < 20){
//    document.write(i + "<br>");
//    i++;
//}
//
//var i = 5;
//
//do{
//    document.write(i + "<br>");
//    i++;
//}
//while(i > 10 && i < 20);



function add() {
    var a =10;
    var b =20;
    document.write("<br><br>");
    document.write("Output by using a function");
    document.write("<br><br>");
    document.write(a + b);
}

add();
