import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Quest } from "../model/quest";
import { BaseResponse } from "../model/base-response";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class QuestService {

    private static readonly BASE_URL = "api/quests";

    constructor(private readonly http: HttpClient) { }

    getQuests(): Observable<Quest[]> {
        return this.http.get<BaseResponse<{ quests: Quest[] }>>(QuestService.BASE_URL)
            .pipe(map(r => r._embedded.quests));
    }
}
