import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/utils/auth/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;
    readonly returnUrl: string = "/tabs/tabs/tab1";
    error = false;

    constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.initForm();
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    login() {
        this.authenticationService.logout()
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value).toPromise().then(data => {
            this.form.reset();
            this.error = false;
            this.routingToTabs();
        }, error => {
            this.error = true;
            console.log(error);
        })
    }

    initForm() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    private routingToTabs() {
        this.router.navigateByUrl('/tabs/tab1');
    }
}

