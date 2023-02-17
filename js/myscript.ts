

var monitor = document.querySelector('#monitor')! as HTMLInputElement;
var btns = document.querySelectorAll('.btn');
// for getting value of buttons, Here we use for loop
let item: any;
for (item of btns) {
    item.addEventListener('click', (e: any) => {
        let btntext = e.target.value;
        monitor.value = monitor.value + btntext;
    });
}


function deg(): void {
    monitor.value = (Number(monitor.value) * Math.PI / 180).toFixed(2);
}

function fe(): void {
    let value = Number(monitor.value).toExponential();
    monitor.value = value.toString();
}


// Code for memory operations
var mem: number = 0;
function savemem(): void {
    mem = Number(monitor.value);
}
function rdmem(): void {
    monitor.value = mem.toString();
}
function submem(): void {
    mem = mem - Number(eval(monitor.value));
}
function addmem(): void {
    mem = mem + Number(eval(monitor.value));
}
function clrmem(): void {
    mem = 0;
}


/* Code for Trignometry starts here*/
function trigno(): void {
    let x = (document.getElementById('trignometry')! as HTMLSelectElement).value;
    console.log(x);
    if (x == 'sin') {
        sin();
    } else if (x == 'cos') {
        cos();
    } else if (x == 'tan') {
        tan();
    }
}
function sin(): void {
    monitor.value = Math.sin(Number(monitor.value) * Math.PI / 180).toFixed(2);
}

function cos(): void {
    monitor.value = Math.cos(Number(monitor.value) * Math.PI / 180).toFixed(2);
}

function tan(): void {
    monitor.value = Math.tan(Number(monitor.value) * Math.PI / 180).toFixed(2);
}
/*Code for trignometry ends here */


/* Code for functions starts here*/
function myfunction(): void {
    let value = (document.getElementById('functions')! as HTMLSelectElement).value;
    if (value == 'abs') {
        myabs();
    } else if (value == 'floor') {
        myfloor();
    } else if (value == 'asin') {
        myasin();
    } else if (value == 'acos') {
        myacos();
    }
}
// some important points to keep in mind
// toFixed(2) function by default returns string type so if we not add toString() function still not get any error.
// But for more optimized code or any exceptional we are using toString.

function myabs(): void {
    monitor.value = (Math.abs(Number(monitor.value))).toString();
}
function myfloor(): void {
    monitor.value = (Math.floor(Number(monitor.value))).toString();
}

// function myasin() & myacos() only accept values ranges between (-1 to 1)
function myasin(): void {
    if (Number(monitor.value) >= -1 && Number(monitor.value) <= 1) {
        monitor.value = Math.asin(Number(monitor.value)).toFixed(2).toString();
    } else {
        alert("only accept values between range(-1 to 1)");
    }
}
function myacos(): void {
    if (Number(monitor.value) >= -1 && Number(monitor.value) <= 1) {
        monitor.value = Math.acos(Number(monitor.value)).toFixed(2).toString();
    } else {
        alert("only accept values between range(-1 to 1)");
    }
}
/* Code for functions ends here*/

function pow(): void {
    monitor.value = Math.pow(Number(monitor.value), 2).toString();
}

// + is also used to convert type string into type number just like Number(x)function.
function sqrt(): void {
    monitor.value = Math.sqrt(+monitor.value).toString();
}

function ln(): void {
    monitor.value = Math.log(+monitor.value).toString();
}

function log(): void {
    monitor.value = Math.log10(+monitor.value).toString();
}

function pi(): void {
    monitor.value = 3.14159265359.toString();
}

function e(): void {
    monitor.value = 2.71828182846.toString();
}

function factorial(): void {
    var i: number, num: number, fact: number;

    fact = 1;
    num = Number(monitor.value);
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    i = i - 1;

    monitor.value = fact.toString();
}

function backspace(): void {
    monitor.value = monitor.value.substr(0, monitor.value.length - 1);
}

function exp(): void {
    // + is used as same as Number(x) is used for
    monitor.value = (Math.exp(+monitor.value)).toString();
}

function onebyx(): void {
    monitor.value = (1 / Number(monitor.value)).toString();
}

// |x| below code is for this button
function absolute(): void {
    monitor.value = (Math.abs(+monitor.value)).toString();
}

// Here tenx() means 10 raised to power x.
function tenx(): void {
    monitor.value = (Math.pow(10, Number(monitor.value))).toString();
}

//power() function calculates x raised to y.
function power(): void {
    var btntext: string = '**';
}

function plusminus(): void {
    monitor.value = (Number(monitor.value) * -1).toString();
}

// clearMonitor() this function will clear values from screen and go back to selected option
function clearMonitor(): void {
    monitor.value = '';
    (document.getElementById("trignometry")! as HTMLSelectElement).selectedIndex = 0;
    (document.getElementById("functions")! as HTMLSelectElement).selectedIndex = 0;
}
