import React from 'react';

const CardDescription = ({plot}) => {
    return (
        <p className="card-text">{plot.slice(0,120)} ...</p>

    )
};

export default CardDescription