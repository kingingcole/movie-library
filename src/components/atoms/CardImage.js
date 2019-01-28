import React from 'react'

const CardImage = ({imageURL, height}) => {
    let style={
        height,
    };
    return (
        <img
            style={style}
            src={imageURL}
            alt="movie poster"
            className='img-responsive card-img-top'/>
    )
};

export default CardImage