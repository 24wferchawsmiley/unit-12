let userNum = document.getElementById("inputBox");
userNum.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    run(e);
  }
});

userNum.focus();

let counter = 0;

function run() {
  let p = document.getElementById("button");
  p.innerHTML = "Hello World!";
  p.style.color = "#fffffff";
  p.style.padding = "20px";
  p.style.textAlign = "center";

  randomNum();
  userNumber();
  compareNum();
}
function randomNum() {
  let ran = Math.floor(Math.random() * 10) +1;
  let x = document.getElementById("random");
  x.innerHTML = ran;
  x.style.backgroundColor = "#391F57";
  x.style.color = "white";
  x.style.padding = "20px";
  x.style.textAlign = "center";
  return ran;
}

function userNumber() {
  let user = document.getElementById("inputBox").value;
  let y = document.getElementById("userNumber");
  y.innerHTML = user;
  y.style.color = "white";
  y.style.backgroundColor = "#391F57";
  y.style.padding = "20px";
  y.style.textAlign = "center";
  return user;
}

function compareNum() {
  let a = userNumber();
  let b = randomNum();
  let z = document.getElementById("compare")
  let c = document.getElementById("counter")

  if (a != b) {
    
    z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
    z.style.color = "white";
    z.style.backgroundColor = "#EB1E0C";
    z.style.padding = "20px";
    z.style.textAlign = "center";
    counter++;
    c.innerHTML = "You have tried " + counter + " times!";
    c.style.color = "white";
    c.style.backgroundColor = "#391F57";
    c.style.padding = "20px";
    c.style.textAlign = "center";
    
  } else if (a == b) {
    
    z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
    z.style.color = "white"
    z.style.backgroundColor = "#14EB00";
    z.style.padding = "20px";
    z.style.textAlign = "center";
    
    c.innerHTML = "You have tried " + counter + " times to get it right!";
    c.style.color = "white";
    c.style.backgroundColor = "#9E8E23";
    c.style.padding = "20px";
    c.style.textAlign = "center";
    counter = 0;
    
  }
  
  resetInput()
}

function resetInput() {
  document.getElementById("inputBox").value = "";
}
 