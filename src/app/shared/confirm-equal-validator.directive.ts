import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'appConfirmEqualValidator',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string;
  validate(control: AbstractControl): { [Key: string]: any } | null {
    // const controlToCompair = control.parent.get(this.appConfirmEqualValidator);
    console.log(control.value);

    if (control.value !== this.appConfirmEqualValidator) {
      return { notEqual: true };
    }
    return null;
  }
}
