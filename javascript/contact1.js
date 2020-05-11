//jquery plugin  10pts
$(function() {
    if($("#main_div").length){
        $("#main_div").validate({
            rules:{
                name_txt:{
                    required: true
                },
                mobile_txt:{
                    required:true
                },
                mail_txt:{
                    required:true
                },
                address:{
                    required:true
                }                  
            },
            messages:{
                name_txt:{
                    required: 'please enter your name'
                },
                mobile_txt:{
                    required:'please enter your mobile number'
                },
                mail_txt:{
                    required:'please enter mail'
                },
                address:{
                    required:'please enter your address'
                }   
            },
             
        })
        
    }

   if($("#main_div").validate==true){
    

alert("thank you for sending");
window.location.href = 'give the url which you want to redirect';
   }
    
});

//function add(){
//    
//    var name=document.getElementById("name_txt").value;
//    var mobile=document.getElementById("mobile_txt").value;
//    var address=document.getElementById("comment_txt").value;
//    console.log(name);
//    console.log(mobile);
//    console.log(address);
//    location.href="order.html";
//    
//
//}
