function add() {

    let num1 = document.querySelector("#v1").value

    let num2 = document.querySelector("#v2").value

    console.log(num1)
    console.log(num2)

    let a = parseFloat(num1)
    let b = parseFloat(num2)
    let sum = a + b

    document.querySelector(".outcome").innerHTML = sum
}

function deduct() {

    let num1 = document.querySelector("#v1").value

    let num2 = document.querySelector("#v2").value

    console.log(num1)
    console.log(num2)

    let a = parseFloat(num1)
    let b = parseFloat(num2)
    let sum = a - b

    document.querySelector(".outcome").innerHTML = sum.toPrecision(3)
}

function devide() {

    let num1 = document.querySelector("#v1").value

    let num2 = document.querySelector("#v2").value

    console.log(num1)
    console.log(num2)

    let a = parseFloat(num1)
    let b = parseFloat(num2)

    let mod = a % b
    let sum = (a - mod) / b


    document.querySelector(".outcome").innerHTML = sum.toPrecision(3) + ' Remainder ' + mod;
}

function mul() {

    let num1 = document.querySelector("#v1").value

    let num2 = document.querySelector("#v2").value

    console.log(num1)
    console.log(num2)

    let a = parseFloat(num1)
    let b = parseFloat(num2)

    let sum = a * b

    document.querySelector(".outcome").innerHTML = sum.toPrecision(3)
}