//This js file is added in appcache file so this will be cached on client side for offline use

function getDateTime() {
    var d = new Date();
    document.getElementById('timePara').innerHTML =  d;
}