import axios from 'axios'


export const loadMoviesFromLocalAPI = () => {

    return dispatch => {
        axios.get('http://127.0.0.1:8000/api/movies')
            .then(res => {
                // console.log(res.data);
                let {data} = res;
                dispatch(loadMoviesFromExternalAPI(data))
            })

    }
};

export const loadMoviesFromExternalAPI = (movies) => {
    return dispatch => {
        let movieList = [];
        movies.map(movie => {
            // console.log(movie);
            let {title, year} = movie;
            let api_url = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=b11ee57d`;
            // console.log(title, year, api_url)
            axios.get(api_url)
                .then(res => {
                    // // console.log(res.data);
                    // console.log(res)
                    movieList.push(res.data);
                    dispatch(
                        {
                            type: 'UPDATE_MOVIES',
                            movie: res.data
                        }
                    )
                });
        });
        // console.log(movieList);
    };

};

export const loadSingleMovie = (title, year) =>{
    return dispatch => {
        console.log(title, year);
        let api_url = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=b11ee57d`;
        axios.get(api_url)
            .then(res => {
                let {data} = res;
                dispatch({
                    type: 'UPDATE_SINGLE_MOVIE',
                    data
                })
            })
    }
};

export const clearSingleMovie = () => {
    return dispatch => {
        dispatch({
            type: 'CLEAR_SINGLE_MOVIE'
        })
    }
}

// export default loadSingleMovie
