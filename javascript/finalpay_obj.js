"use strict";

var str;
var tt='';
var ord='';

var ttl=sessionStorage.subtotal_t;

//final_order=final_order.split("b");
//for(var  j=0;j<final_order.length;j++){
//    
//    final_order+=final_order[j].split("b");
//}


var final_size1,final_crust,final_topings,final_price;
var sum=parseFloat(ttl);
$(document).ready(function() {
    
    
    
    $("#subtotal2").text("$"+sum);
    

});


//object constructor 5pts
var tip=function(tip_cents){
    this.tip_cents=tip_cents;
}



//object method using dot notation  2pts
tip.prototype.isValid=function(){
    //use of logical OR 5pts
    //use of this 5pts
    if(isNaN(this.tip_cents) || this.tip_cents <0 || this.tip_cents>99){
        return false;
    }else{
        return true;
    }
};
tip.prototype.getNumbers=function(){
     str = document.getElementById("tip_type").value;
     console.log(str);
        
    
    var final_ttl=0;
    var sess=parseFloat(this.tip_cents);
    var sb=parseFloat(this.subtotal2);
    
    //use of if..else statement 5pts
    if(str=="percentage"){
     final_ttl=((sum*parseFloat(this.tip_cents))/100) +sum;
        
        
    }
    else{
        final_ttl=sess+sum;
    }
   
    return final_ttl;
}


//use of more than 5 querry method  5pts
//use of comments throughout 5pts
//total ~105pts