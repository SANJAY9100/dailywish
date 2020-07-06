var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "!";
}
var tvar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML ="TIME : "+d.toLocaleTimeString();
  document.getElementById("date").innerHTML ="DATE : "+d.toDateString();
  var hr=d.getHours();
  if(hr>=5 && hr<12)
  {
    document.getElementById("greet").innerHTML ="Good Morning !";
  }
  if(hr>=12 && hr<18)
  {
    document.getElementById("greet").innerHTML ="Good Afternoon !";
    document.getElementById("canvas1").style.backgroundImage = "url( https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)";

  }
  if(hr>=18 && hr<21)
  {
    document.getElementById("greet").innerHTML ="Good Evening !";
    document.getElementById("canvas1").style.backgroundImage = "url( https://images.unsplash.com/photo-1577257107590-fc448601f16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)";
  }
  if(hr<5 || hr>=21)
  {
    document.getElementById("greet").innerHTML ="Good Night !";
    document.getElementById("canvas1").style.backgroundImage = "url( https://images.unsplash.com/photo-1592535160747-57c53a53b731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)";

  }
}






