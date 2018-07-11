import { User } from "./user";
import { Product } from "./product";

export class Command {
    id: number = null;
    client: User;
    contenuCommande: Array<ContenuCommande>;    

    public totalPrice() {
        let total = 0.00;
        this.contenuCommande.forEach(element => {
            total += element.priceByProduit();
        });
        return total;
    }
}

export class ContenuCommande {
    produit: Product;
    quantity: number;

    public priceByProduit() {
        return this.quantity * this.produit.price;
    }
}
