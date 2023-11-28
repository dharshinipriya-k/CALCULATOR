//--------------Title----------------
const titl = document.createElement("h1");
titl.setAttribute("id", "title");
titl.innerText = "CALCULATOR USING DOM";
document.body.append(titl);

//-------------------Description about Project-----------------
const info = document.createElement("p");
info.setAttribute("id", "description");
info.innerText = "In this task an CALCULATOR has been designed using DOM";
document.body.append(info);

//------------------ Designing---------------
const calci = document.createElement("div");
calci.setAttribute("class", "contain");
document.body.append(calci);

//------------------Function to create elements------------------
function create(tagname, content, attrname, attrvalue) {
  const ele = document.createElement(tagname);
  ele.innerText = content;
  ele.setAttribute(attrname, attrvalue);
  calci.append(ele);
  return ele;
}
const ip = create("input", "", "class", "input");
const ipclr = create("button", "C", "class", "input");
const ipdel = create("button", "<-", "class", "input");
const ipdot = create("button", ".", "class", "input");
const ip_mul = create("button", "x", "class", "input");
const ip7 = create("button", "7", "class", "input");
const ip8 = create("button", "8", "class", "input");
const ip9 = create("button", "9", "class", "input");
const ip_div = create("button", "/", "class", "input");
const ip4 = create("button", "4", "class", "input");
const ip5 = create("button", "5", "class", "input");
const ip6 = create("button", "6", "class", "input");
const ip_minus = create("button", "-", "class", "input");
const ip1 = create("button", "1", "class", "input");
const ip2 = create("button", "2", "class", "input");
const ip3 = create("button", "3", "class", "input");
const ip_plus = create("button", "+", "class", "input");
const ip0 = create("button", "0", "class", "input");
const ip00 = create("button", "00", "class", "input");
const ip_eq = create("button", "=", "class", "input");

//---------------Setting Attributes-----------------
ip.setAttribute("type", "text");
ip.setAttribute("id", "result");
ip_eq.setAttribute("id", "equal");
ip_div.setAttribute("id", "divide");
ip_mul.setAttribute("id", "multiply");
ip_plus.setAttribute("id", "add");
ip_minus.setAttribute("id", "subtract");
ipdot.setAttribute("id", "dot");
ipclr.setAttribute("id", "clear");
ip0.setAttribute("id", "0");
ip00.setAttribute("id", "00");
ip1.setAttribute("id", "1");
ip2.setAttribute("id", "2");
ip3.setAttribute("id", "3");
ip4.setAttribute("id", "4");
ip5.setAttribute("id", "5");
ip6.setAttribute("id", "6");
ip7.setAttribute("id", "7");
ip8.setAttribute("id", "8");
ip9.setAttribute("id", "9");
ipdel.setAttribute("id", "del");

//---------------CALCULATOR BUTTON CLICK EVENTS--------------

const one = document.getElementById("1");
one.addEventListener("click", () => {
  document.querySelector("#result").value += "1";
});

const two = document.getElementById("2");
two.addEventListener("click", () => {
  document.querySelector("#result").value += "2";
});
const three = document.getElementById("3");
three.addEventListener("click", () => {
  document.querySelector("#result").value += "3";
});
const four = document.getElementById("4");
four.addEventListener("click", () => {
  document.querySelector("#result").value += "4";
});
const five = document.getElementById("5");
five.addEventListener("click", () => {
  document.querySelector("#result").value += "5";
});
const six = document.getElementById("6");
six.addEventListener("click", () => {
  document.querySelector("#result").value += "6";
});
const seven = document.getElementById("7");
seven.addEventListener("click", () => {
  document.querySelector("#result").value += "7";
});
const eight = document.getElementById("8");
eight.addEventListener("click", () => {
  document.querySelector("#result").value += "8";
});
const nine = document.getElementById("9");
nine.addEventListener("click", () => {
  document.querySelector("#result").value += "9";
});

const zero = document.getElementById("0");
zero.addEventListener("click", () => {
  document.querySelector("#result").value += "0";
});

const zeero = document.getElementById("00");
zeero.addEventListener("click", () => {
  document.querySelector("#result").value += "00";
});

const plus = document.getElementById("add");
plus.addEventListener("click", () => {
  document.querySelector("#result").value += "+";
});

const minus = document.getElementById("subtract");
minus.addEventListener("click", () => {
  document.querySelector("#result").value += "-";
});

const multi = document.getElementById("multiply");
multi.addEventListener("click", () => {
  document.querySelector("#result").value += "*";
});

const divi = document.getElementById("divide");
divi.addEventListener("click", () => {
  document.querySelector("#result").value += "/";
});

const point = document.getElementById("dot");
point.addEventListener("click", () => {
  document.querySelector("#result").value += ".";
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  document.querySelector("#result").value = "";
});

const backspace = document.getElementById("del");
backspace.addEventListener("click", () => {
  document.querySelector("#result").value = document
    .querySelector("#result")
    .value.slice(0, -1);
});

const answer = document.getElementById("equal");
answer.addEventListener("click", () => {
  document.querySelector("#result").value = eval(
    document.querySelector("#result").value
  );
});

//Keyboard Events

const key1 = document.querySelector("#result");
key1.addEventListener("keydown", (data) => {
  if (
    data.key == 0 ||
    data.key == 1 ||
    data.key == 2 ||
    data.key == 3 ||
    data.key == 4 ||
    data.key == 5 ||
    data.key == 6 ||
    data.key == 7 ||
    data.key == 8 ||
    data.key == 9 ||
    data.key == "+" ||
    data.key == "-" ||
    data.key == "*" ||
    data.key == "/" ||
    data.key == "."
  ) {
  } else {
    alert("Only NUMBERS are allowed!!!");
  }
});
