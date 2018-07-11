import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms'
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value;
        let confirmPassword = AC.get('password2').value;
        if (password != confirmPassword) {
            console.log('MDPass different');
            AC.get('password2').setErrors({ MatchPassword: true })
        } else {
            console.log('Les MDP sont correctes :)');
            return null
        }
    }
}