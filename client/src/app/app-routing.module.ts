import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./component/home.component";
import { QuestComponent } from "./component/quest.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "quest", component: QuestComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
