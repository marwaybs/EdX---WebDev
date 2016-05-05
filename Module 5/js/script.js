/*
$(document).ready(function () {
    manipulateDOM();
});
function manipulateDOM() {
    var h1Headers = $('h1');
    h1Headers.text('Hello World');
}
*/

function makeRequests(){
    $.ajax({
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json' 
    })
    .done(function(response){
        $('body > p').text(
            JSON.stringify(response)
        );
    })
    .fail(function(){
        alert('An error has occured')
    })
}
$(document).ready(function () {
    makeRequests();
});