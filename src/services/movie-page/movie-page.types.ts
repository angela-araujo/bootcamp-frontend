import { Response } from '../base/base.types';

export type GetMovieIdData = {
    movieId: string
}
export type GetMovieId = Response<GetMovieIdData>