import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMoviesLoaded } from "../../../store/list-movies/list-movies.selectors";
import { listMoviesActions } from "../../../store/list-movies/list-movies.slice";
import UlList from "./my-list.styled";

export default function MyList() {

    const [data, setData] = useState({_id: '', name: '', category: '', description: '', media_type: '', poster: '', backdrop: '', createdAt: '', updatedAt: '', __v: ''});
    const dispatch = useDispatch();
    const myList = useSelector(listMoviesLoaded);
    
    useEffect(
        () => {
            console.log(data, 'Chamando dispatch listMoviesActions.bucar(data)');
            dispatch(listMoviesActions.bucar(data))
            console.log(myList, 'myList')
        },
        [listMoviesLoaded]
    )

    // myList.map((item, index) => {
    //     return <li>item.name</li>
    // })

    return (
        
        <UlList>            
            <li>Filme 1</li>
            <li>Filme 2</li>
            <li>Filme 3</li>
        </UlList>
    )
}