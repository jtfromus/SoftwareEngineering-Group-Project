  var cart = [];

    function deleteItem(value){
      var index = this.cart.indexOf(value);
      if(index > -1){
        this.cart.splice(index, 1);
      }
    }

    function displayCart(){
      //get the table from HTML
      var cartTable = document.getElementById("cartTable");
      //Delete any row if there exists one
      while(cartTable.rows.length>0){
        cartTable.deleteRow(0);
      }

      //Total Price
      var totalPrice = 0;

      for(var product in cart){
        //add a row
        var row = cartTable.insertRow();

        //linking cells
        var productName = row.insertCell(0);
        var productPic = row.insertCell(1);
        var productPrice = row.insertCell(2);

        //adding info to the cells
        productName.innerHTML = cart[product].Name;
        productPrice.innerHTML = cart[product].Price;

        //setting up image to be inserted to cell
        productPic.innerHTML = "";
        var img = document.createElement('img');
        img.src = cart[product].Image;
        img.style.width="50px";
        img.style.height="auto";
        productPic.appendChild(img);
        
        //adding to total price
        totalPrice += cart[product].Price;
      }

      //displaying total Price
      document.getElementById("totalPrice").innerHTML=totalPrice;
  }
  
  function addItem(name, image, price){
    //create a product object, this method doest not require the use of a Product class. Product class now not under use here.
    var product = {};
    product.Name=name;
    product.Image=image;
    product.Price=price;
    cart.push(product);

    //Update the cart
    displayCart();
  }  
  
  //TEST CASE
  
 /*
  var cart = [];
  
  var customer = new Shopper(cart, "Bob Builder");
  
  customer.addItem("Squash");
  customer.addItem("Chicken");
  customer.addItem("Milk");
  
  //customer.deleteItem("Chicken");
  
  console.log(customer.displayCart());
  */
