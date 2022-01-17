import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { listMoviesLoaded } from "../../../store/list-movies/list-movies.selectors";
import { listMoviesActions } from "../../../store/list-movies/list-movies.slice";
import { UlList, LiList, ThumbnailMovie } from "./my-list.styled";

export default function MyList() {

    const [data, setData] = useState([{
        "_id": "", "name": "", "category": "", "description": "",
        "media_type": "", "poster": "", "backdrop": "", "createdAt": "", "updatedAt": "", "__v": ""
    }]);
    const dispatch = useDispatch();
    const myList = useSelector(listMoviesLoaded);

    useEffect(
        () => {
            dispatch(listMoviesActions.buscar(data));
            console.log('myList  ', myList,);
        },
        []
    )

    const getListRenderer = myList?.map((item, index) =>
        <LiList key={index}><ThumbnailMovie src={item.poster} /></LiList>
    )

    return (
        <UlList>
        { getListRenderer }
        </UlList>
        // < Carousel changeOnFirstRender >
            
        // </Carousel >
    )
}