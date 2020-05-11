"use strict";

function takeout(){
    location.href="order.html";
}
function delievery(){
    location.href="address.html";
    
    
}

window.onload=function(){
    document.getElementById("takeout").onclick=takeout;
            document.getElementById("delievery").onclick=delievery;
}