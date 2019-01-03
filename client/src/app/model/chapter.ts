import { Link } from "./link";

export class Chapter {

    readonly text: string;
    readonly references: Reference[];
}

class Reference {

    readonly text: string;
    readonly _links: { chapter: Link };
}
