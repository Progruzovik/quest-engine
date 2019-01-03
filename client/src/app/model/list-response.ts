export interface ListResponse<T> {

    readonly _embedded: { data: T[] };
    readonly _links: any;
}
