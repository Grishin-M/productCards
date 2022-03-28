export type InitialAppState = {
    cards: Array<string>,
    loading: boolean,
    error: string,
    pagination: Pagination
}

type Pagination = {
    page: number;
    size: number;
}