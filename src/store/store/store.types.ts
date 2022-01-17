import { UserState } from "../user/user.types";
import { ListMoviesState } from "../list-movies/list-movies.types";
import { MoviesState } from "../movies/movies.types";
import { MoviePageState } from "../movie-page/movie-page.types";

export type Action<K> = {
    type: string
    payload: K
}

export type State = {
    user: UserState
    listMovies: ListMoviesState
    movies: MoviesState
    moviePage: MoviePageState
}