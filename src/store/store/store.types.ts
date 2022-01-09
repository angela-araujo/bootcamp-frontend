import { UserState } from "../user/user.types";
import { ListMoviesState } from "../list-movies/list-movies.types";

export type Action<K> = {
    type: string
    payload: K
}

export type State = {
    user: UserState
    listMovies: ListMoviesState
}