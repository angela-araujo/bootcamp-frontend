import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { moviesActions } from '../../../store/movies/movies.slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moviesLoaded } from "../../../store/movies/movies.selectors";
import { DivBanner, ImgBanner } from '../components/banner.styled';
import { Movies } from "../../../store/movies/movies.types";

export default function Banner() {

    const dispatch = useDispatch();
    const movies = useSelector(moviesLoaded);
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

    const catalog = movies?.data.slice(6,10);

    useEffect(
        () => {
            dispatch(moviesActions.getData(data as Movies));
            console.log('useEffect Home', movies);
            console.log('movies?.data', catalog);
        }, []
    )


    return (
        <Carousel navButtonsAlwaysVisible changeOnFirstRender >
            {
                catalog?.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    return (
        <DivBanner>
            <ImgBanner src={props.item.backdrop} alt={props.item.name} />
            {/* <Button className="CheckButton"></Button> */}
        </DivBanner>
    )
}