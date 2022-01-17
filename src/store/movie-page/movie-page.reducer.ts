import { MoviePageAction, MoviePageState, SetErrorAction } from "./movie-page.types"

const getMoviePage = (state: MoviePageState, action: MoviePageAction) => { }

const setData = (state: MoviePageState, action: MoviePageAction) => {
    state.data = action.payload
}

const setError = (state: MoviePageState, action: SetErrorAction) => {
    state.error = action.payload
}

const reducers = { setData, setError, getMoviePage }

export default reducers