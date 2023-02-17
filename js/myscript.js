var monitor = document.querySelector('#monitor');
var btns = document.querySelectorAll('.btn');
// for getting value of buttons, Here we use for loop
var item;
for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
    item = btns_1[_i];
    item.addEventListener('click', function (e) {
        var btntext = e.target.value;
        monitor.value = monitor.value + btntext;
    });
}
function deg() {
    monitor.value = (Number(monitor.value) * Math.PI / 180).toFixed(2);
}
function fe() {
    var value = Number(monitor.value).toExponential();
    monitor.value = value.toString();
}
// Code for memory operations
var mem = 0;
function savemem() {
    mem = Number(monitor.value);
}
function rdmem() {
    monitor.value = mem.toString();
}
function submem() {
    mem = mem - Number(eval(monitor.value));
}
function addmem() {
    mem = mem + Number(eval(monitor.value));
}
function clrmem() {
    mem = 0;
}
/* Code for Trignometry starts here*/
function trigno() {
    var x = document.getElementById('trignometry').value;
    console.log(x);
    if (x == 'sin') {
        sin();
    }
    else if (x == 'cos') {
        cos();
    }
    else if (x == 'tan') {
        tan();
    }
}
function sin() {
    monitor.value = Math.sin(Number(monitor.value) * Math.PI / 180).toFixed(2);
}
function cos() {
    monitor.value = Math.cos(Number(monitor.value) * Math.PI / 180).toFixed(2);
}
function tan() {
    monitor.value = Math.tan(Number(monitor.value) * Math.PI / 180).toFixed(2);
}
/*Code for trignometry ends here */
/* Code for functions starts here*/
function myfunction() {
    var value = document.getElementById('functions').value;
    if (value == 'abs') {
        myabs();
    }
    else if (value == 'floor') {
        myfloor();
    }
    else if (value == 'asin') {
        myasin();
    }
    else if (value == 'acos') {
        myacos();
    }
}
// some important points to keep in mind
// toFixed(2) function by default returns string type so if we not add toString() function still not get any error.
// But for more optimized code or any exceptional we are using toString.
function myabs() {
    monitor.value = (Math.abs(Number(monitor.value))).toString();
}
function myfloor() {
    monitor.value = (Math.floor(Number(monitor.value))).toString();
}
// function myasin() & myacos() only accept values ranges between (-1 to 1)
function myasin() {
    if (Number(monitor.value) >= -1 && Number(monitor.value) <= 1) {
        monitor.value = Math.asin(Number(monitor.value)).toFixed(2).toString();
    }
    else {
        alert("only accept values between range(-1 to 1)");
    }
}
function myacos() {
    if (Number(monitor.value) >= -1 && Number(monitor.value) <= 1) {
        monitor.value = Math.acos(Number(monitor.value)).toFixed(2).toString();
    }
    else {
        alert("only accept values between range(-1 to 1)");
    }
}
/* Code for functions ends here*/
function pow() {
    monitor.value = Math.pow(Number(monitor.value), 2).toString();
}
// + is also used to convert type string into type number just like Number(x)function.
function sqrt() {
    monitor.value = Math.sqrt(+monitor.value).toString();
}
function ln() {
    monitor.value = Math.log(+monitor.value).toString();
}
function log() {
    monitor.value = Math.log10(+monitor.value).toString();
}
function pi() {
    monitor.value = 3.14159265359.toString();
}
function e() {
    monitor.value = 2.71828182846.toString();
}
function factorial() {
    var i, num, fact;
    fact = 1;
    num = Number(monitor.value);
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    i = i - 1;
    monitor.value = fact.toString();
}
function backspace() {
    monitor.value = monitor.value.substr(0, monitor.value.length - 1);
}
function exp() {
    // + is used as same as Number(x) is used for
    monitor.value = (Math.exp(+monitor.value)).toString();
}
function onebyx() {
    monitor.value = (1 / Number(monitor.value)).toString();
}
// |x| below code is for this button
function absolute() {
    monitor.value = (Math.abs(+monitor.value)).toString();
}
// Here tenx() means 10 raised to power x.
function tenx() {
    monitor.value = (Math.pow(10, Number(monitor.value))).toString();
}
//power() function calculates x raised to y.
function power() {
    var btntext = '**';
}
function plusminus() {
    monitor.value = (Number(monitor.value) * -1).toString();
}
// clearMonitor() this function will clear values from screen and go back to selected option
function clearMonitor() {
    monitor.value = '';
    document.getElementById("trignometry").selectedIndex = 0;
    document.getElementById("functions").selectedIndex = 0;
}
