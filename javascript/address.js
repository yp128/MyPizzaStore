"use strict";

var $=function(id){
    return document.getElementById(id);
}

//use of form validation 10pts
function validation(){
    var name=$("name_txt").value;
    var mobile=$("mobile_txt").value;
    var comment=$("comment_txt").value;
    var mob_regex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var mail_regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //if...else..if statement 5pts
    if(name===""){
        $("name_val").innerHTML="Please enter your name";
    }
    //use of logical NOT operator 5pts
    else if(!isNaN(name)){
        $("name_val").innerHTML="Please enter appropriate name";
    }else if(mobile===""){
        $("mobile_val").innerHTML="Please enter mobile number";
    }
    else if(!mobile.match(mob_regex)){
        $("mobile_val").innerHTML="Please enter appropriate mobile number";
    
    }else if(comment===""){
        $("comment_val").innerHTML="Please enter Comment";
    }
    else{
        var a=$("name_txt").value;
        var b=$("mobile_txt").value;
        var c=$("comment_txt").value;
        sessionStorage.name=a;
        sessionStorage.mobile=b;
        sessionStorage.address=c;
        location.href="order.html";
    }
    
    
}
