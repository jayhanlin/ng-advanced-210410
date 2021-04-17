import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {
  origClass = '';
  form: FormGroup;
  data: any = {
    email: 'user1@example.com',
    password: '123abcABC',
    isRememberMe: false,
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: new FormControl('user1@example.com', {
        validators: [
          Validators.required,
          Validators.email
        ],
        updateOn: 'blur'
      }),
      password: this.fb.control('123ABCabc', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ],
        updateOn: 'change'
      }),
      isRememberMe: true,
      extra: this.fb.array([
        this.fb.group({
          name: this.fb.control(''),
          tel: this.fb.control('')
        }),
        this.fb.group({
          name: this.fb.control(''),
          tel: this.fb.control('')
        }),
      ])
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      console.log('送出表單', form.value);
    }
  }

  showError(name, validation) {
    return this.form.get(name).invalid
      && this.form.get(name).dirty
      && this.form.get(name).errors[validation];
  }

  getFormArray(name: string) {
    return this.form.get(name) as FormArray;
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }
}
