export class User {

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
