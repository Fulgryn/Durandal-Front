export class Product {
    id: number = null;
    // ref: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    type: string;
    // year: Date;
    editor: string;
    picture: string;
    enabled: boolean;

    /*constructor(id: number, name: string, quantity: number,
        price: number, description: string, type: string, editor: string, picture: string){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.type = type;
        //this.year = year;
        this.editor = editor;
        this.picture = picture;
    }*/

    constructor( name: string, quantity: number,
        price: number, description: string, type: string, editor: string, picture: string, id?: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.type = type;
        // this.year = year;
        this.editor = editor;
        this.picture = picture;
    }
}
