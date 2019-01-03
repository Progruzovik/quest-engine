import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { QuestService } from "../service/quest.service";

@Component({
    template: `
        <mat-card *ngFor="let quest of questService.quests; index as i">
            <mat-card-title>{{quest.title}}</mat-card-title>
            <mat-card-content>{{quest.description}}</mat-card-content>
            <mat-card-actions>
                <button mat-button routerLink="quest" (click)="onQuestStart(i)">НАЧАТЬ</button>
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

    constructor(private readonly title: Title, readonly questService: QuestService) { }

    ngOnInit(): void {
        this.title.setTitle("Quest Engine");
        this.questService.getQuests();
    }

    onQuestStart(index: number) {
        this.questService.selectQuest(index);
    }
}
