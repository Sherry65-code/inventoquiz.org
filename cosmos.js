// Cosmos quiz Script

var score = 0;
var time = 0;
var si = setInterval(timer , 1000);

function timer() {
    time += 1;
    document.getElementById('time').innerHTML = "Time - "+time;
}

function q1c() {
    document.getElementById('q1a4').style.backgroundColor = "green";
    document.getElementById('q1a1').style.backgroundColor = "red";
    document.getElementById('q1a2').style.backgroundColor = "red";
    document.getElementById('q1a3').style.backgroundColor = "red";
    score += 1;
}

function q1w() {
    document.getElementById('q1a4').style.backgroundColor = "green";
    document.getElementById('q1a1').style.backgroundColor = "red";
    document.getElementById('q1a2').style.backgroundColor = "red";
    document.getElementById('q1a3').style.backgroundColor = "red";
}

function q2c() {
    document.getElementById('q2a1').style.backgroundColor = "green";
    document.getElementById('q2a2').style.backgroundColor = "red";
    document.getElementById('q2a3').style.backgroundColor = "red";
    document.getElementById('q2a4').style.backgroundColor = "red";
    score += 1;
}

function q2w() {
    document.getElementById('q2a1').style.backgroundColor = "green";
    document.getElementById('q2a2').style.backgroundColor = "red";
    document.getElementById('q2a3').style.backgroundColor = "red";
    document.getElementById('q2a4').style.backgroundColor = "red";
}

function q3w() {
    document.getElementById('q3a2').style.backgroundColor = "green";
    document.getElementById('q3a1').style.backgroundColor = "red";
    document.getElementById('q3a3').style.backgroundColor = "red";
    document.getElementById('q3a4').style.backgroundColor = "red";
    score += 1;
}

function q3c() {
    document.getElementById('q3a2').style.backgroundColor = "green";
    document.getElementById('q3a3').style.backgroundColor = "red";
    document.getElementById('q3a4').style.backgroundColor = "red";
    document.getElementById('q3a1').style.backgroundColor = "red";
}

function q4c() {
    document.getElementById('q4a4').style.backgroundColor = "green";
    document.getElementById('q4a1').style.backgroundColor = "red";
    document.getElementById('q4a2').style.backgroundColor = "red";
    document.getElementById('q4a3').style.backgroundColor = "red";
    score += 1;
}

function q4w() {
    document.getElementById('q4a4').style.backgroundColor = "green";
    document.getElementById('q4a1').style.backgroundColor = "red";
    document.getElementById('q4a2').style.backgroundColor = "red";
    document.getElementById('q4a3').style.backgroundColor = "red";
}

function q5c() {
    document.getElementById('q5a4').style.backgroundColor = "green";
    document.getElementById('q5a2').style.backgroundColor = "red";
    document.getElementById('q5a3').style.backgroundColor = "red";
    document.getElementById('q5a1').style.backgroundColor = "red";
    score += 1;
    document.getElementById('qu').innerHTML = "";
    clearInterval(si);
    document.getElementById('s').innerHTML = "Score = "+score+"/5";
    document.getElementById('t').innerHTML = "Time Taken = "+time+" sec";
}

function q5w() {
    document.getElementById('q5a4').style.backgroundColor = "green";
    document.getElementById('q5a2').style.backgroundColor = "red";
    document.getElementById('q5a3').style.backgroundColor = "red";
    document.getElementById('q5a1').style.backgroundColor = "red";
    document.getElementById('qu').innerHTML = "";
    clearInterval(si);
    document.getElementById('s').innerHTML = "Score = "+score+"/5";
    document.getElementById('t').innerHTML = "Time Taken = "+time+" sec";
}

