import { GetMovies, GetPagePayload } from "../movies/movies.types";
import axiosInstance from "../../modules/axios/axios.module";
export default function moviesService() {
    
    const getMovies = (): Promise<GetMovies> => axiosInstance.get('movies')
    
    return { getMovies }
    
}