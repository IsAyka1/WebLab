"use strict";
function ret(word) {
    return word.value;
}
function sum(a, b) {
    return a + b;
}

function pow(el) {
    return el * el;
}

function ArrToText(arr) {
    let newArr = arr.split(' ');
    let res = new Array();
    newArr.forEach(function(item, i, newArr) {
        if(item == parseInt(item, 10)) {
            res.push(String(pow(item)));

        } else {
            res.push('0');
        }
    });
    return res;
}

function func1()
{
    let word = document.getElementById("word");
    document.getElementById("p1").innerHTML = "Результат: " + ret(word);
}

function func2()
{
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let res = sum(n1, n2);
    document.getElementById("p2").innerHTML = `Результат: ${res} `;
}

function func3()
{
    let arr = document.getElementById("arr").value;
    let res = ArrToText(arr);
    document.getElementById("p3").innerHTML = `Результат: ${res} `;
}