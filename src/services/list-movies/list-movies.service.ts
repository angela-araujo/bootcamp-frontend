import { GetListMovies } from "./list-movies.types";
import axiosInstance from "../../modules/axios/axios.module";
import { Session } from "../session/session.types";
export default function listMoviesService() {
    
    const getLisMovies = (accessToken: Session['accessToken']): Promise<GetListMovies> => axiosInstance.get('list', {
        headers: { authorization: accessToken }
    })
    
    return { getLisMovies }
    
}