import { Action } from "../store/store.types";

export type Movies = {
    page: string
    limit: string
    previousPage?: string
    nextPage?: string
    totalItems: string
    totalPages: string
    data: [{
        _id?: string
        name?: string
        category?: string
        description?: string
        media_type?: string
        poster?: string
        backdrop?: string
        createdAt?: string
        updatedAt?: string
        __v?: string
    }]
};

export type MoviesState = {
    data: Movies | null
    error: string
}

export type MoviesAction = Action<Movies>

export type SetErrorAction = Action<string>