import { NgModule } from '@angular/core';
import { AppLandingLayoutComponent } from '../landing/components/landing/landing-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppLandingLayoutComponent,
        SidenavComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLandingRoutingModule
    ],
    exports: [
        AppLandingLayoutComponent
    ]
})
export class AppLandingModule { }
