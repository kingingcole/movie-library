import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = ({ type, color }) => (
    <ReactLoading type={type} color={color}  width={37} />
);

export default LoadingSpinner