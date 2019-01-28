import React from 'react'

const Footer = () => {
    return (
        <section className='bg-dark mt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mt-2 mb-1">
                            <a className='text-success' href="emeruchecole.herokuapp.com">Emeruche Cole</a>
                        </p>
                        <p className="text-center text-light">Movie data from <a className='text-success' href="omdbapi.com">OMDbApi</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer