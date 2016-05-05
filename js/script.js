/*
function startLogic(){
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML=newHtml;
}
startLogic();

function clickHandler(){
    alert('you clicked me!');
}
*/

/*
var $elem = document.getElementById('output');
$elem.innerHTML += "Test"
*/

/*
var testVariable;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');
document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
*/

/*
function handleClick(callback){
    alert('This button has been clicked');
    if (callback){
        callback();
    }
}
function doMore(){
    alert("I could process more logic here");
}
function doSomethingElse(){
    document.writeln('Test Message');
}
*/

/*
function correctMethodName(){
    return "Output Message";
}
try{
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error){
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
}
*/

var worker;

function startWorker() {
    worker = new Worker("worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker(){
    worker.terminate();
}