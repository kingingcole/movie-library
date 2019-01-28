const initState = {
    movies: [],
    single_movie: {},
    loading: true
};

const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case 'UPDATE_MOVIES':
            let {movie} = action;
            // console.log(movie);

            return {
                ...state,
                movies: [...state.movies, movie]
            };
        case 'UPDATE_SINGLE_MOVIE':
            return{
              ...state,
              single_movie: action.data,
                loading: false
            };
        case 'CLEAR_SINGLE_MOVIE':
            return{
                ...state,
                loading: true
            };
        default:
            return state
    }
};

export default rootReducer