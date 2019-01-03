import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chapter } from "../model/chapter";
import { Quest } from "../model/quest";

@Injectable({ providedIn: "root" })
export class ChapterService {

    private _currentChapter: Chapter;

    constructor(private readonly httpClient: HttpClient) { }

    get currentChapter(): Chapter {
        return this._currentChapter;
    }

    getFirstChapterForQuest(quest: Quest) {
        this.httpClient.get<Chapter>(quest._links.firstChapter.href)
            .subscribe(c => this._currentChapter = c);
    }

    getChapterByReference(referenceIndex: number) {
        this.httpClient.get<Chapter>(this.currentChapter.references[referenceIndex]._links.chapter.href)
            .subscribe(c => this._currentChapter = c);
    }
}
