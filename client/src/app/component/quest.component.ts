import { Component, OnInit } from "@angular/core";
import { QuestService } from "../service/quest.service";
import { Title } from "@angular/platform-browser";
import { ChapterService } from "../service/chapter.service";
import { Router } from "@angular/router";

@Component({
    template: `
        <p>{{chapterService.currentChapter.text}}</p>
        <div *ngFor="let reference of chapterService.currentChapter.references; index as i">
            <button mat-button (click)="onChapterChange(i)">> {{reference.text}}</button>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            margin: 2.5rem;
            text-align: justify;
        }
        
        p {
            font-size: medium;
            white-space: pre-line;
        }
        
        button {
            font-size: medium;
            padding-left: 0.2rem;
        }
    `]
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
