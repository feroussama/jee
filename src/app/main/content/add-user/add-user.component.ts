import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  formErrors: any;
  constructor(private formBuilder: FormBuilder,
    private fuseConfig: FuseConfigService, ) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    // Reactive form errors
    this.formErrors = {
      cin: {},
      nom: {},
      prenom: {},
      role: {},
      tel: {},
      email: {},
      password: {},
      passwordConfirm: {}
    };
  }

  ngOnInit() {
    // Reactive Form
    this.form = this.formBuilder.group({
      company: [
        {
          value: 'Google',
          disabled: true
        }, Validators.required
      ],
      cin: ['', [Validators.required, Validators.maxLength(8)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPassword]]
      
    });

    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  onFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }
  

}
function confirmPassword(control: AbstractControl) {
  if (!control.parent || !control) {
    return;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return;
  }

  if (passwordConfirm.value === '') {
    return;
  }

  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }
}
