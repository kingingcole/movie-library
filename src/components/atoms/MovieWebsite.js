import React from 'react'

const MovieWebsite = ({website}) => {
    const link = website ==='N/A' ? ('N/A') : (<a className='text-success' rel="noopener noreferrer" href={website} target='_blank'>Go to movie website</a>)
    return(
        <div>
            <h4>Website</h4>
            <p>
                {link}
            </p>
        </div>
    )
};

export default MovieWebsite