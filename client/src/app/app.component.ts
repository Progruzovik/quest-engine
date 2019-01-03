import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    template: `
        <div class="mat-app-background mat-typography grid">
            <mat-toolbar color="primary" class="header">
                <h1>{{title.getTitle()}}</h1>
            </mat-toolbar>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [`
        .grid {
            display: grid;
            grid-template-rows: auto 1fr;
            width: 100vw;
            height: 100vh;
        }

        .header {
            grid-row: 1;
        }

        .content {
            grid-row: 2;
            overflow-y: auto;
        }
    `]
})
export class AppComponent  {

    constructor(readonly title: Title) { }
}
