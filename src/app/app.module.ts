import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { LoginComponent } from './main/content/login/login.component';
import { MaterialModule } from 'app/material.module';
import { RegistreComponent } from './main/content/registre/registre.component';
import { ForgotPasswordComponent } from './main/content/forgot-password/forgot-password.component';
import { AdminSpaceComponent } from './main/content/admin-space/admin-space.component';
import { AddUserComponent } from './main/content/add-user/add-user.component';
import { AffichUserComponent } from './main/content/affich-user/affich-user.component';
import { PayFormComponent } from './main/content/pay-form/pay-form.component';
import { AffichPropComponent } from './main/content/affich-prop/affich-prop.component';
import { AddAnnonceComponent } from './main/content/add-annonce/add-annonce.component';
import { AddPubComponent } from './main/content/add-pub/add-pub.component';
import { AffichReclamComponent } from './main/content/affich-reclam/affich-reclam.component';
import { ProfileUserComponent } from './main/content/profile-user/profile-user.component';
import { ProfilePropComponent } from './main/content/profile-prop/profile-prop.component';
import { AddPropComponent } from './main/content/add-prop/add-prop.component';


const appRoutes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registre',
        component: RegistreComponent
    },
    {
        path: 'forgot_password',
        component: ForgotPasswordComponent
    },
     {
        path: 'admin_space',
         component: AdminSpaceComponent
    },
    {
        path: 'profile_user',
        component: ProfileUserComponent
    },
    {
        path: 'profile_prop',
        component: ProfilePropComponent
    },



    {
        path: 'sample',
        redirectTo: 'sample'
    }



];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistreComponent,
        ForgotPasswordComponent,
        AdminSpaceComponent,
        AddUserComponent,
        AffichUserComponent,
        PayFormComponent,
        AffichPropComponent,
        AddAnnonceComponent,
        AddPubComponent,
        AffichReclamComponent,
        ProfileUserComponent,
        ProfilePropComponent,
        AddPropComponent,






    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        MaterialModule,
        NgxDatatableModule

],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
