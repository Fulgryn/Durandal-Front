import { v4 as uuid } from 'uuid';


export class User {
    isAdmin: boolean;
    id: number;
    email: string;
    hashedPassword: String | Int32Array;
    lastName: string;
    firstName: string;
    adress: string;
    phone: number;
    birthDate: Date;


    constructor(email:string, hashedPassword: String | Int32Array, 
                lastName: string, firstName: string,  adress: string,
                phone: number, birthDate: Date, id?:number) {

                    this.email = email;
                    this.hashedPassword = hashedPassword;
                    this.lastName = lastName;
                    this.firstName = firstName;
                    this.adress = adress ; 
                    this.phone = phone ;
                    this.birthDate = birthDate;
                    
                    this.isAdmin = false;
                    this.id = id ;

                }
}
