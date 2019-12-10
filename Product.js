class Product{

    //Constructor
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }

    //getters
    get name(){return this.name;}
    get price(){return this.price;}
    get image(){return this.image;}

    //setters
    set name(name){this.name = name;}
    set price(price){this.price = price;}
    set image(image){this.image = image;}
}