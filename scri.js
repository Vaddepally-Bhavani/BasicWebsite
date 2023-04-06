function fun(){
    var Firstname=document.getElementById("Firstname").value;  
    var Lastname=document.getElementById("Lastname").value;  
    var Aadharnumber=document.getElementById("Aadharnumber").value;  
    var Phonenumber=document.getElementById("Phonenumber").value;  
    // var Appointmentdate=document.getElementById("Appointmnetdate").value;  
    // var Appointmnettime=document.getElementById("Appointmenttime").value; 
    var Healthconcern=document.getElementById("Healthconcern").value;  
    var Consultdoctor=document.getElementById("Consultdoctor").value;  
    var City=document.getElementById("City").value;  
    var Zipcode=document.getElementById("Zipcode").value;   
if(Firstname=="" || Lastname==""||Aadharnumber==""||Phonenumber==""||Healthconcern==""||Consultdoctor==""||City==""||Zipcode==""){
   console.log("if")
    alert("enter all values")
}else{
    console.log("else");
    setTimeout(function(){document.location.href = "succes.html"},true);
}
}
function g(){
    setTimeout(function(){document.location.href = "reg.html"},true);
}
function gl(){
    setTimeout(function(){document.location.href = "contacts.html"},true);
}