import React from 'react';
import MovieDetailCardBody from '../molecules/MovieDetailCardBody'
import CardImage from '../atoms/CardImage'


const MovieDetailCard = ({movie}) => {
    return (
        <div>
            <CardImage imageURL={movie.Poster} height='400px'/>
            <MovieDetailCardBody movie={movie}/>
        </div>
    )
};

export default MovieDetailCard