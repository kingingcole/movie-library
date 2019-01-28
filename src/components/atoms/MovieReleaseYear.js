import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const MovieReleaseYear = ({year}) => {
    return (
        <div className='col-4'>
            <FontAwesomeIcon icon="calendar-alt"/> <span className='text-success ml-3'>{year}</span>
        </div>
    )
};

export default MovieReleaseYear