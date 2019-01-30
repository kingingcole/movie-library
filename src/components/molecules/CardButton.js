import React from 'react';
import Button from '../atoms/Button';
import {Link} from "react-router-dom";


const CardButton = ({title, year}) => {
    let link = `/${title}/${year}`;
    return(
        <Link to={link}>
            <Button color='success'>More Details</Button>
        </Link>
    )
};

export default CardButton