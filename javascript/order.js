"use strict";

//use an array 2pts
var order_size=[];
var order_crust=[];
var order_toppings=[];
var order=[];
var total=[];
var order1=[];

//global variables 2pts
var selected_size,selected_crust,selected_toppings;


//custom function with parameter 5pts
var $=function(id){
    return document.getElementById(id);
}

//custom function without parameter 2pts
function displayorder(){
    //use of innerhtml property 
    $("tbl").innerHTML=order.join("\n")+"\n";
};

function siz(){
    //local variables 2pts
    var sizes=document.getElementsByName("size");
    var price,price1;
    
    //for loop 5pts
        for(var i=0; i<sizes.length;i++){
            if(sizes[i].checked){
                var selected_size=sizes[i].value;
            }
        }
    
    //switch statement with 3 case and default value 10pts
            switch(selected_size){
                case "small":
                    price="$5";
                    price1=5;
                    break;
                case "medium":
                    price="$10";
                    price1=10;
                    break;
                case "large":
                    price="$12";
                    price1=12;
                    break;
                default:
                    price="$15";;
                    price1=15;
                    break;

            }
            

    //use of get  element by name 2pts
    var crusts=document.getElementsByName("crust");
    var c_price,c_price1;
        for(var i=0; i<crusts.length;i++){
            if(crusts[i].checked){
                var selected_crust=crusts[i].value;
            }
        }
            switch(selected_crust){
                case "stuff crust":
                    c_price="$2";
                    c_price1=2;
                    break;
                default:
                    c_price="$0";
                    c_price1=0;
                    break;

            }
        

    var toppings=document.getElementsByName("topings");
    var t_price,t_price1;
    var selected_toppings="";
    var count=0;
        for(var i=0; i<toppings.length;i++){
            if(toppings[i].checked){
                 selected_toppings+=toppings[i].value+",";
                 count++;
            }

        }
        t_price=2*count;
        t_price1=2*count;
    
    
    var subtotal=parseFloat(price1)+parseFloat(c_price1)+parseFloat(t_price1);
    total.push(subtotal);
    
    order_size.push(selected_size);
    order_crust.push(selected_crust);
    order_toppings.push(selected_toppings);
    
    var ord="<table><tr><th><label>Pizza size</label></th><th>"+selected_size +"</th></tr><tr><td><label>Crust type</label></td><td>" +selected_crust +"</td></tr><tr><td><label>Toppings</label></td><td>"+ selected_toppings.split(",").join("<br>")+"\t\t($"+parseFloat(subtotal)+")<br><br></td></table>";
    var ord1=selected_size +"\n\t" +selected_crust +"\n\t"+ selected_toppings+"\t\t($"+parseFloat(subtotal)+")yash";
    order.push(ord);
    console.log(order);
    order1.push(ord1);
     $("order_form").reset();
    
    
    var sum=0;
    for(var i=0;i<total.length;i++){
        var temp = parseFloat(total[i]);
        sum= parseFloat(sum);
        sum=sum+temp;
    }
    //use of session storage  5pts
    sessionStorage.subtotal_t=parseFloat(sum);
    sessionStorage.final_order=order1;
    console.log(sessionStorage.final_order);
    
    
    
    displayorder();

}
function next_page(){
    location.href="finalpay.html";
}

//use of built in method of window 2pts
window.onload=function(){
    
    //use of click event
    $("sub").onclick=siz;
    $("sub1").onclick=next_page;
}