import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesLoaded } from "../../../store/movies/movies.selectors";
import { moviesActions } from "../../../store/movies/movies.slice";
import { LiList, ThumbnailMovie, UlList } from "./my-list.styled";
import { Movies } from "../../../store/movies/movies.types";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from "react-router-dom";
export default function Catalog() {

    const [data, setData] = useState({
        "page": "1",
        "limit": "1",
        "previousPage": "0",
        "nextPage": "0",
        "totalItems": "1",
        "totalPages": "1",
        "data": [{
            "_id": "",
            "name": "",
            "category": "",
            "description": "",
            "media_type": "",
            "poster": "",
            "backdrop": "",
            "createdAt": "",
            "updatedAt": "",
            "__v": ""
        }]
    });
    const dispatch = useDispatch();
    const movies = useSelector(moviesLoaded);
    const catalog = movies?.data.slice(0, 6);

    useEffect(
        () => {
            dispatch(moviesActions.getData(data as Movies));
        },
        []
    )

    const getListRenderer = catalog?.map((item, index) => {
        return (
            <LiList key={index}>
                <PlayCircleIcon color="error" sx={{ fontSize: 40 }} />
                
                <Link to="/movies/id/61b919fbcc75c3a912274244" >
                    <ThumbnailMovie src={item.poster}></ThumbnailMovie>
                </Link>
            </LiList>
        )
    })

    return (
        <UlList>
            {getListRenderer}
        </UlList>
    )
}