class Shopper{

    constructor(cart) {
      this.cart= new Array();
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
  }
  
  
  //TEST CASE
  /*
 
  var cart = [];
  
  var customer = new Shopper(cart)
  
  customer.addItem("Squash");
  customer.addItem("Chicken");
  customer.addItem("Milk");
  
  customer.deleteItem("Chicken");
  
  console.log(customer);
  */