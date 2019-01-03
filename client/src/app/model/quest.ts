import { Link } from "./link";

export interface Quest {

    readonly title: string;
    readonly description: string;
    readonly _links: { firstChapter: Link };
}
