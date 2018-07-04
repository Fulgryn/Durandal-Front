export class Product {
    ref: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    type: string;
    year: Date;
    editor: string;
    picture: string;


    constructor(ref: string, name: string, quantity: number,
                price: number, description: string, type: string,
                year: Date, editor: string, picture: string) {
        this.ref = ref;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.type = type;
        this.year = year;
        this.editor = editor;
        this.picture = picture;
    }

}
