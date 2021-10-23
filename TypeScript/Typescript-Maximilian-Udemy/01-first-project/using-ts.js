var button = document.querySelector("button");
// the non null assertion operator. It iw a way to tell the compiler "this expression can not be null or undefined"
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
