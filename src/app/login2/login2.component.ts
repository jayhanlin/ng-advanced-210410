import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

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
      email: 'user1@example.com',
      password: '123qweQWE',
      isRememberMe: true,
    })
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log('送出表單', form.value);
    }
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }
}