import { MoviesAction, MoviesState, SetErrorAction } from "./movies.types"

const getData = (state: MoviesState, action: MoviesAction) => { }

const setData = (state: MoviesState, action: MoviesAction) => {
    state.data = action.payload
}

const setError = (state: MoviesState, action: SetErrorAction) => {
    state.error = action.payload
}

const reducers = { setData, setError, getData }

export default reducers