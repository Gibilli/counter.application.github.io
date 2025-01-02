const plus = document.createElement("button");
const minus = document.createElement("button");
const output = document.createElement("span");

plus.innerHTML = "+";
minus.innerHTML = "-";
output.innerHTML = "0";

console.log(minus);

let plusContainer = document.getElementsByClassName("plus")[0];
let minusContainer = document.getElementsByClassName("minus")[0];
let outputContainer = document.getElementsByClassName("numbers")[0];

if (plusContainer && minusContainer && outputContainer) {
    plusContainer.appendChild(plus);
    minusContainer.appendChild(minus);
    outputContainer.appendChild(output);

    let value = 0;

    plus.addEventListener('click', add);
    minus.addEventListener('click', subtract);

    function add() {
        value++;
        output.innerHTML = value;
    }

    function subtract() {
        value--;
        output.innerHTML = value;
    }
} else {
    console.error("Uno o più container non esistono nel DOM");
}
