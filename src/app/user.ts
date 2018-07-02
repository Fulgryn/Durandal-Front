export class User {

    email: string;
    password_clair: String;
    passHash: String | Int32Array;

    constructor() {
        this.email = null;
        this.passHash = null;
    }

}
