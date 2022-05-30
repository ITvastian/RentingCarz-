let selectedValue = document.querySelectorAll(".Leagues")[0];



console.log(selectedValue);

selectedValue.addEventListener("change", function(e) {
let value = this.value;



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.response);
       const  response = JSON.parse(this.response);
       console.log(response);
//    
    }
};
xhttp.open("GET", "http://localhost:3000/v1/competitions", true);
xhttp.send();
});


