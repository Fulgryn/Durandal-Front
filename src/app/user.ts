import { v4 as uuid } from 'uuid';


export class User {

    id: number;
    email: string;
    passHash: String | Int32Array;
    nom ;
    prenom;
    adresse;
    telephone;
    dateDeNaissance;


    constructor() {
        this.email = null;
        this.passHash = null;
    }

}
