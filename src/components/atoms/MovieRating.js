import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const MovieRating = ({rating}) => {
    return (
        <div className='col-4'>
            <FontAwesomeIcon icon="star"/> <span className='text-success ml-3'>{rating}</span>
        </div>
    )
};

export default MovieRating