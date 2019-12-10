class Product{

    //Constructor
    constructor(itemNumber, name, price, image){
        this.itemNumber = itemNumber;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    //getters
    get itemNumber(){return this.itemNumber}
    get name(){return this.name;}
    get price(){return this.price;}
    get image(){return this.image;}

    //setters
    set itemNumber(itemNumber){this.itemNumber = itemNumber;}
    set name(name){this.name = name;}
    set price(price){this.price = price;}
    set image(image){this.image = image;}
}