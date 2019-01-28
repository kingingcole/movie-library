import React from 'react'
import RecommendForm from '../organisms/RecommendForm'
import axios from "axios";

const RecommendMovie = (props) => {
    let handleSubmit = (e, data) => {
        e.preventDefault();
        // console.log(this.state);
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/recommendations/',
            headers: {'Content-Type': 'application/json'},
            data
        })
            .then(res =>{
                console.log(res);
                console.log(props);
                props.history.push('/')
            })
    };

    return (
        <div className="container">
            <p className='text-center text-success'>Recommend A Movie</p>
            <RecommendForm handleSubmit={handleSubmit}/>
        </div>
    )
};

export default RecommendMovie