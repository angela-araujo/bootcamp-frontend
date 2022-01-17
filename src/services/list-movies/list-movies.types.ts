import { Response } from '../base/base.types';
import { ListMovies } from '../../store/list-movies/list-movies.types';

type GetLisMoviesData = {
    listMovies: ListMovies
}
export type GetListMovies = Response<GetLisMoviesData>