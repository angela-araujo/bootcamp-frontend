import { ListMoviesAction, ListMoviesState, SetErrorAction } from "./list-movies.types"

const bucar = (state: ListMoviesState, action: ListMoviesAction) => {
    
}
const setData = (state: ListMoviesState, action: ListMoviesAction) => {
    state.data = { ...state, ...action.payload }
}

const setError = (state: ListMoviesState, action: SetErrorAction) => {
    state.error = action.payload
}

const reducers = { setData, setError, bucar}

export default reducers