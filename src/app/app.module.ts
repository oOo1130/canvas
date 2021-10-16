import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarLComponent } from './component/sidebar-l/sidebar-l.component';
import { FixbarComponent } from './component/fixbar/fixbar.component';
import { CommonModule } from '@angular/common';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { YieldComponent } from './component/yield/yield.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarLComponent,
    FixbarComponent,
    MaincontentComponent,
    YieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
