import React from 'react'
import CardTitle from '../atoms/CardTitle'
import CardDescription from '../atoms/CardDescription'
import CardButton from './CardButton'


const CardBody = ({movie}) => {
    return(
        <div className="movie-list-card-body card-body bg-light">
            <CardTitle title={movie.Title}/>
            <CardDescription plot={movie.Plot}/>
            <CardButton title={movie.Title} year={movie.Year}/>
        </div>
    )
};

export default CardBody;