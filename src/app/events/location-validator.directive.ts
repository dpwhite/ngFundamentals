import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';
import { count } from 'rxjs/operators';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, 
    multi: true }]
})

export class LocationValidator implements Validator {
    constructor() {
     console.log('hello validator');  
    }

    validate(formGroup: FormGroup): {[key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
        
        if ((addressControl && addressControl.value && cityControl && cityControl.value
            && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
                return null;
            }
        else {
            return {validationLocation : false};
        }
    }
}