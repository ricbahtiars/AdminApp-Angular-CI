import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angular material design
import { MaterialDesign } from './material/material';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
// koneksi http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  entryComponents:[
    TambahDataComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TambahDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
