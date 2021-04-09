import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UserControllerService } from '../../../controllers/user/user-controller.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private userControllerService: UserControllerService
  ) { }

  ngOnInit(): void {

  }

  save() {
    this.userControllerService.register({ name: this.userForm.value.name, email: this.userForm.value.email })
      // .then((result: any) => console.log('Ya Bish!', result))
      .subscribe((result: any) => console.log('Ya bish...!', result));
  }
}
