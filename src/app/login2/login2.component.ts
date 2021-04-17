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
    "email": "doggy.huang@gmail.com",
    "password": "123789yuiT",
    "isRememberMe": true,
    "extra": [
      {
        "name": "1111",
        "tel": "1111"
      },
      {
        "name": "2222",
        "tel": "2222"
      },
      {
        "name": "3333",
        "tel": "3333"
      }
    ]
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
      extra: this.fb.array([])
    });

    for (let i = 0; i < this.data.extra.length; i++) {
      this.getFormArray('extra').push(this.makeExtra());
    }

    this.form.setValue(this.data);
  }

  resetForm() {
    this.getFormArray('extra').clear()

    for (let i = 0; i < this.data.extra.length; i++) {
        this.getFormArray('extra').push(this.makeExtra());
    }

    this.form.reset(this.data);
  }

  makeExtra() {
    return this.fb.group({
      name: this.fb.control(''),
      tel: this.fb.control('')
    });
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

  addExtra() {
    let extra = this.getFormArray('extra');
    extra.push(this.makeExtra());
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }
}
