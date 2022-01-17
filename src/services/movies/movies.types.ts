import { Response } from '../base/base.types';
import { Movies } from '../../store/movies/movies.types';

export type GetPagePayload = {
    page?: string
}
type GetMoviesData = {
    movies: Movies
}
export type GetMovies = Response<GetMoviesData>