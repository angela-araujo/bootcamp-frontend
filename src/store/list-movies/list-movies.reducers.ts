import { ListMoviesAction, ListMoviesState, SetErrorAction } from "./list-movies.types"

const buscar = (state: ListMoviesState, action: ListMoviesAction) => { }

const setData = (state: ListMoviesState, action: ListMoviesAction) => {
    state.data = action.payload
}

const setError = (state: ListMoviesState, action: SetErrorAction) => {
    state.error = action.payload
}

const reducers = { setData, setError, buscar }

export default reducers