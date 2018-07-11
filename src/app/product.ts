export class Product {
    id: number = null;
    // ref: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    type: string;
    //year: Date;
    editor: string;
    picture: string;

    constructor(name: string, quantity: number, price: number, description: string, type: string, editor: string, picture: string, id?:number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.type = type;
        this.editor = editor;
        this.picture = picture;
	if (id != undefined) {
            this.id = id;
	}
    }
}
