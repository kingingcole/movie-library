import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadMoviesFromLocalAPI} from '../../store/actionCreators/movieActions'
// import axios from 'axios'
import MovieCard from '../organisms/MovieCard'
import LoadingSpinner from '../atoms/LoadingSpinner'


class Home extends Component {


    componentDidMount() {
        if (!this.props.movies.length) {
            this.props.loadMovies()
        }
    }

    style = {
        width: '100%'
    };

    render() {
        var http = require("http");
        setInterval(function() {
            http.get("https://movie-lib-backend.herokuapp.com");
        }, 300000); // every 5 minutes (300000)


        let intro = this.props.movies.length ? (
            <p style={this.style} className="mx-2 text-center lead">Here are just a few of the movies I have
                seen this year</p>
        ) : (null);
        const moviesList = this.props.movies.length ? (
            this.props.movies.map(movie => {
                return (
                    <MovieCard movie={movie} key={movie.imdbID}/>
                )
            })
        ) : (
            <div className="col-12">
                <div className="svg-holder">
                    <LoadingSpinner color='#0f0' type='spinningBubbles'/>
                </div>
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    {intro}
                    {moviesList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadMovies: () => dispatch(loadMoviesFromLocalAPI())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)