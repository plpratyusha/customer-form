import { BrowserModule } 					from '@angular/platform-browser';
import { NgModule } 						from '@angular/core';
import { ReactiveFormsModule }  			from '@angular/forms';

import { AppComponent } 					from './app.component';

import { NgbModule } 						from '@ng-bootstrap/ng-bootstrap';

import { EmailValidator } 					from '@angular/forms';
import { FormsModule } 						from '@angular/forms';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgbModule.forRoot(), ReactiveFormsModule /*, EmailValidator, FormsModule*/ ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { constructor() {} }

/*

@Directive({ selector: '[ngIf]' })
class NgIf {
  set ngIf: any
  set ngIfThen: TemplateRef<NgIfContext> | null
  set ngIfElse: TemplateRef<NgIfContext> | null
}
export class NgIfSimple {
  show: boolean = true;
}


@Directive({
    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
    providers: [EMAIL_VALIDATOR]
})
class EmailValidator implements Validator {
  set email: boolean | string
  validate(c: AbstractControl): ValidationErrors | null
  registerOnValidatorChange(fn: () => void): void
}

*/