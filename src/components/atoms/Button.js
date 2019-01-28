import React from 'react';

const Button = ({children, color, type}) => {
    let className = `btn btn-${color}`;
    return(
        <button type={type} className={className}>{children}</button>
    )
};

export default Button;