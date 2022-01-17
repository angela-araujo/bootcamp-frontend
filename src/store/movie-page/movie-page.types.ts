import { Action } from '../store/store.types';

export type MoviePage = {
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
};

export type MoviePageState = {
    data: MoviePage | null
    error: string
}

export type MoviePageAction = Action<MoviePage>

export type SetErrorAction = Action<string>