import { GetListMovies } from "./list-movies.types";
import axiosInstance from "../../modules/axios/axios.module"

export default function listMoviesService() {
    
    const getLisMovies = (): Promise<GetListMovies> => axiosInstance.get('list')
    
    console.log(getLisMovies, 'list-movies.service getListMovies');

    return { getLisMovies }
    
}