import React from 'react';
import Button from '../atoms/Button'

const FormSubmitBtn = ({color, children}) => {
    return (
        <Button color={color} type='submit'>{children}</Button>
    )
};

export default FormSubmitBtn