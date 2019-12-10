class Shopper{

    constructor(name){
      var cart= new Array();
      this.name = name;
    }

    addItem(item){
      this.cart.push(item);
    }
  
    deleteItem(value){
      var index = this.cart.indexOf(value);
      if(index > -1){
        this.cart.splice(index, 1);
      }
    }

    displayCart(){
      //get the table from HTML
      var cartTable = document.getElementById("cartTable");
      //Delete any row if there exists one
      while(cartTable.rows.length>0){
        cartTable.deletRow(0);
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
        productName.innerHTML = cart[product].name;
        productPic.innerHTML = cart[product].image;
        productPrice.innerHTML = cart[product].price;
        
        //adding to total price
        totalPrice += cart[product].price;
      }

      //displaying total Price
      document.getElementById("totalPrice").innerHTML=totalPrice;
  }
  
  set name(name){this.name = name;}

  get name(){return this.name;}
  
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
