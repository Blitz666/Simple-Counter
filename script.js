let header = document.getElementById("header");
const newLi = document.createElement('li');
let counter = document.querySelector(".counter");
let currentNumber = document.querySelector("#currentNumber");
const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector(".button2")
let count = 0

let colors = ["blue", "red", "green", "yellow", "purple", "orange", "lime"]

function changeBckGrnd() {
    const randomNumber = Math.floor(Math.random() * colors.length + 1);
    document.body.className = colors[randomNumber];
}

let printDate = () => {
    header.appendChild(newLi);
    newLi.innerHTML = new Date();
}

printDate();

btn1.addEventListener('click', function() {
    count--
    currentNumber.innerHTML = count;
    changeBckGrnd()
})

btn2.addEventListener('click', function() {
    count++
    currentNumber.innerHTML = count;
    changeBckGrnd()
})