import React from 'react';
import CardImage from '../atoms/CardImage'
import CardBody from '../molecules/CardBody'
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {
    const cardStyle = {
        width: 'auto',
        height: 'auto'
    };

    const pStyle = {
        display: 'none'
    };
    let link = `/${movie.Title}/${movie.Year}`;

    return(
        <div className="col-6 col-md-6 col-lg-4">
            <Link to={link}>
                <div className="card my-3 mx-auto text-center" style={cardStyle}>
                    <CardImage imageURL={movie.Poster} height='450px'/>
                    <CardBody movie={movie}/>
                </div>
                <p className='text-success text-center for-small-screens' style={pStyle}>{movie.Title}</p>
            </Link>
        </div>
    )
};

export default MovieCard
