import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserControllerService } from '../../../../controllers/user/user-controller.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required]],
    password2: ['', [Validators.required]]
  }, { validator: this.matchingPasswords });

  constructor(
    private fb: FormBuilder,
    private userControllerService: UserControllerService
  ) { }

  ngOnInit(): void { }

  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if (password1 == password2)
        return null;
    }
    return { matching: false };
  }

  save() {
    this.userControllerService
      .signUp({
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password1
      })
      // .then((result: any) => console.log('Ya Bish!', result))
      .subscribe((result: any) => console.log('Ya bish...!', result));
  }
}
