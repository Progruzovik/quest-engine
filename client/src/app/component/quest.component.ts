import { Component, OnInit } from "@angular/core";
import { QuestService } from "../service/quest.service";
import { Title } from "@angular/platform-browser";
import { ChapterService } from "../service/chapter.service";
import { Router } from "@angular/router";

@Component({
    template: `
        <p>{{chapterService.currentChapter.text}}</p>
        <div *ngFor="let reference of chapterService.currentChapter.references; index as i">
            <button mat-button (click)="onChapterChange(i)">{{reference.text}}</button>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: justify;
            margin: 4rem 2rem 2rem 2rem;
        }
        
        p {
            font-size: medium;
            text-indent: 1.5rem;
            white-space: pre-line;
            max-width: 60rem;
            margin-top: 0;
            padding-top: 0;
        }
        
        button {
            font-size: medium;
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
