import axiosInstance from "../../modules/axios/axios.module";
import { GetMovieId } from "./movie-page.types";
export default function moviePageService() {
    
    const getMovie = (movieId: string): Promise<GetMovieId> => axiosInstance.get('movies/id/',  {
        headers: { id: movieId }
    })
    
    return { getMovie }
    
}