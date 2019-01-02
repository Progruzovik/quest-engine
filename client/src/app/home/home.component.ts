import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { QuestService } from "../service/quest.service";
import { Quest } from "../model/quest";

@Component({
    template: `
        <mat-card *ngFor="let quest of quests">
            <mat-card-title>{{quest.title}}</mat-card-title>
            <mat-card-content>{{quest.abstract}}</mat-card-content>
            <mat-card-actions>
                <a mat-button>НАЧАТЬ</a>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        mat-card {
            margin: 1rem;
            max-width: 40rem;
        }
    `]
})
export class HomeComponent implements OnInit {

    quests: Quest[] = [];

    constructor(title: Title, private readonly questService: QuestService) {
        title.setTitle("Quest Engine");
    }

    ngOnInit(): void {
        this.questService.getQuests()
            .subscribe(q => this.quests = q);
    }
}
