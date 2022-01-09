import { Action } from '../store/store.types';
export const AccessTokenStorageKey = 'ACCESS_TOKEN';
export type ListMovies = {    
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
}

export type ListMoviesState = {
    data: ListMovies | null
    error: string
}

export type ListMoviesAction = Action<ListMovies>

export type SetErrorAction = Action<string>