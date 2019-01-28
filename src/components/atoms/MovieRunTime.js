import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const MovieRunTime = ({runtime}) => {
    return (
        <div className='col-4'>
            <FontAwesomeIcon icon="clock"/> <span className='text-success ml-3'>{runtime}</span>
        </div>
    )
};


export default MovieRunTime