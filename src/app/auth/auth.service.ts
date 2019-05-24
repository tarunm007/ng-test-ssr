import { AuthModule } from './auth.module';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {


    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

   

   
}
