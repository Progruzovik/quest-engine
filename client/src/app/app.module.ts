import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HomeComponent } from "./component/home.component";
import { environment } from "../environments/environment";
import { QuestComponent } from "./component/quest.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        QuestComponent
    ],
    providers: [
        {
            provide: "baseApiUrl",
            useValue: environment.apiUrl
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
