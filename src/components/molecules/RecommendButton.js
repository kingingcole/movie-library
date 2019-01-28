import React from 'react'
import Button from '../atoms/Button'
import {Link} from 'react-router-dom'

const RecommendButton = () =>{
    return(
        <Link to='/recommend'>
            <Button className='mx-4' color='success'>Recommend a movie</Button>
        </Link>
    )
};

export default RecommendButton;