import React from 'react';

const FormInput = ({type, id, placeholder, value, handleChange, required}) => {

    return (
        <input type={type} className="form-control" id={id}
               placeholder={placeholder} value={value} required={required}
               onChange={handleChange}/>

    )
};

export default FormInput