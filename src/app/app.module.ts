
import { environment } from './../environments/environment';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';





import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
//    AngularFireModule.initializeApp(environment.firebaseConfig),
//    AngularFireAuthModule,
//    AngularFireDatabaseModule,
//    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
