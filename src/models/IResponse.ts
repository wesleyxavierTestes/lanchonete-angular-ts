export interface IResponse<T> {
    content: Array<T>;
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
}
