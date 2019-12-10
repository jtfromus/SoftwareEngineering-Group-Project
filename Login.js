function validateUser(){

    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username == "Admin" && password == "1234"){
        window.location = "./Shop.html";

        //Creating a global shopper object
        var shopper = Shopper(username);
        shopper === window.shopper;
    }
    else
        alert("Login failed\nNOTE: Username- Admin Password- 1234");
}
