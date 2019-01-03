import { Component, OnInit } from "@angular/core";
import { QuestService } from "../service/quest.service";
import { Title } from "@angular/platform-browser";
import { ChapterService } from "../service/chapter.service";
import { Router } from "@angular/router";

@Component({
    template: `
        <ng-container *ngIf="chapterService.currentChapter">
            <p>{{chapterService.currentChapter.text}}</p>
            <button mat-button *ngFor="let reference of chapterService.currentChapter.references; index as i"
                    (click)="onChapterChange(i)">{{reference.text}}</button>
        </ng-container>
    `,
    styles: [``]
})
export class QuestComponent implements OnInit {

    constructor(private readonly title: Title, private readonly router: Router,
                private readonly questService: QuestService, readonly chapterService: ChapterService) { }

    ngOnInit(): void {
        if (this.questService.currentQuest) {
            this.title.setTitle(this.questService.currentQuest.title);
            this.chapterService.getFirstChapterForQuest(this.questService.currentQuest);
        } else {
            this.router.navigate([""]);
        }
    }

    onChapterChange(referenceIndex: number) {
        this.chapterService.getChapterByReference(referenceIndex);
    }
}
