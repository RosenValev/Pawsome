import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to trim input value and check if it's empty
export function trimNotEmptyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value) {
            const trimmedValue = control.value.trim();
            if (!trimmedValue) {
                return { 'empty': true }; // Return error if value is empty after trimming
            }
        }
        return null; // Return null if value is valid
    };
}
