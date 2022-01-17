import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/headers/header-main/hearder.component";
import axiosInstance from "../../modules/axios/axios.module";
import { moviePage } from "../../store/movie-page/movie-page.selectors";
import { moviePageActions } from "../../store/movie-page/movie-page.slice";

export default function MoviePage() {

    const [data, setData] = useState({ "_id": ""  });
    const dispatch = useDispatch();    
    const movie = useSelector(moviePage);
    console.log(movie);
    
    useEffect(
        () => {
            // dispatch(moviePageActions.getMoviePage(data));
            // console.log('movie', movie);
            async function getMoviePage() {
                const response = await axiosInstance.get('movies/id/61b919fbcc75c3a912274244');
                const movie = response.data.result;
                console.log(response);
                
            }
            getMoviePage();
        }, []
    )

    

    return (

        <Container>
            <Header></Header>
        </Container>
    )
}