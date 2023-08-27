import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  registerUser() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      this.userService.registerUser(user).subscribe(
        (response) => {
          alert('User ' + user.username + ' has been registered successfully')
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
