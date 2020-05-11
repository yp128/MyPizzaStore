"use strict";

function myfunction(){
    var final_ord=sessionStorage.final_order;
console.log(final_ord);
var final_order=final_ord.split("yash");
console.log(final_order);
    final_order.pop();
    document.getElementById("tbl").innerHTML=final_order.join('<br>');
    document.getElementById("tbl2").innerHTML=final_order.join('<br>');
    
     document.getElementById("tbl3").innerHTML=sessionStorage.name;
     document.getElementById("tbl4").innerHTML=sessionStorage.address;
     document.getElementById("tbl5").innerHTML=sessionStorage.mobile;
    
    console.log(sessionStorage.name);
}
$(document).ready(function() {

    $(".behind_the_scene").hide();
    $("#show").click(function() {

    var coin=new tip($("#tip_cents").val());
        
        if (!coin.isValid()) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            var num=0;
            num+=coin.getNumbers();
            
            console.log("yash"+num);
            
            $("#final_receipt").val(num);
            
            $(".behind_the_scene").show();
            $("#finalpay_div").hide();
           
        }
    }); 
    
    
    $("#cents").focus();
    
});
function last(){
    //use of math 2pts
    var rendom=parseInt(Math.random()*1000);
    alert("your order no is "+rendom);
    
//    use of if condition  5pts
    if(window.confirm("your order no is confirmed)){
        location.href="index.html";
    }
}
window.onload=function(){
    myfunction();
}