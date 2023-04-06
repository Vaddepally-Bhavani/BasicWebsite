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
if(Firstname=="")alert("The firstname is empty");  
if(Lastname=="")alert("The Lastname is empty");
if(Aadharnumber=="")alert("The Aadharnumber is empty");
if(Phonenumber=="")alert("The Phonenumberis empty");
// if(Appointmentdate=="")alert("The Appointmentdate is empty");
// if(Appointmnettime=="")alert("The Appointmnettime is empty");
if(Healthconcern=="")alert("The Healthconcern is empty");
if(Consultdoctor=="")alert("The Consultdoctor is empty");
if(City=="")alert("The City is empty");
if(Zipcode=="")alert("The Zipcode is empty");
g();``
}
function g(){
    window.location.href="succes.html";
}