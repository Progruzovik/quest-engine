export interface BaseResponse<T> {

    readonly _embedded: T;
    readonly _links: any;
}
