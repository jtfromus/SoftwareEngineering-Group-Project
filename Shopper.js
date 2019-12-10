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
      
      var str = "Test/n";

      this.cart.forEach(element => {
        str += element + ", " ;

      });

      var new_str = str.slice(0, -2);
      /*
      //TEST CASE

      console.log("Before: " + str);

      console.log("After: " + new_str);
      */
     console.log(new_str);
  
  }
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
