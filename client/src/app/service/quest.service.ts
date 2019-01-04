import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quest } from "../model/quest";
import { ListResponse } from "../model/list-response";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class QuestService {

    private currentIndex = 0;
    private _quests: Quest[] = [];

    constructor(private readonly http: HttpClient) { }

    get currentQuest(): Quest {
        return this.quests[this.currentIndex] ? this.quests[this.currentIndex] : null;
    }

    get quests(): Quest[] {
        return this._quests;
    }

    getQuests() {
        this.http.get<ListResponse<Quest>>(`${environment.apiUrl}/api/quests`)
            .pipe(map(r => r._embedded.data))
            .subscribe(q => {
                this.currentIndex = 0;
                this._quests = q;
            });
    }

    selectQuest(index: number) {
        this.currentIndex = index;
    }
}
