import { FormGroup, ValidatorFn } from "@angular/forms";

export function passwordMatch(match1: string, match2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(match1);
        const pass2 = group.get(match2);

        return pass1?.value === pass2?.value
        ? null
        : { passwordMatch: true }
    }
};