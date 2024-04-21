import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// Custom Validator for email domain provider
export function createEmailDomainValidator(hosts: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();
      
        if (!value) return null;
      
        const matches = hosts.some((host) => value.indexOf(`@${host}`) > -1);
      
        return matches ? { invalidEmailDomain: true } : null;
      }
      
}
