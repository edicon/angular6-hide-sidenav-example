// For SSR
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';

import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
    children: [
      { path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToolbarComponent,
    HomeLayoutComponent,
    SecondComponent,
    FirstComponent,
    LoginLayoutComponent,
    LoginComponent,
  ],
  imports: [
    // For SSR
    // CommonModule,
    // NgtUniversalModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
