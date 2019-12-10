function validateUser(){

    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username == "Admin" && password == "1234"){
        window.location = "./Shop.html";
    }
    else
        alert("Login failed\nNOTE: Username- Admin Password- 1234");
}
