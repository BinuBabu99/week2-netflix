function formValidate() {
    
    var email = document.getElementById("cemail").value;
    
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  
    if(!email.match(validRegex)){
      alert("Email not vlaid!!");
    }
}