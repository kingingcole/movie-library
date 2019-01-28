import React, {Component} from 'react'
import MovieDetailCard from '../organisms/MovieDetailCard'
import {connect} from 'react-redux'
import {loadSingleMovie, clearSingleMovie} from '../../store/actionCreators/movieActions'
import MoviePlot from '../atoms/MoviePlot'
import MovieActors from '../atoms/MovieActors'
import MovieProducer from '../atoms/MovieProducer'
import MovieDirector from '../atoms/MovieDirector'
import MovieWebsite from '../atoms/MovieWebsite'
import MovieGenre from '../atoms/MovieGenre'
import LoadingSpinner from '../atoms/LoadingSpinner'



class SingleMovie extends Component {

    componentDidMount() {
        let {movie_title, movie_year} = this.props.match.params;
        let {loadSingleMovie} = this.props;
        loadSingleMovie(movie_title, movie_year)
    }

    componentWillUnmount() {
        let {clearSingleMovie} = this.props;
        clearSingleMovie();
    }

    render() {
        let {single_movie, loading} = this.props;
        return (
            loading ? (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="svg-holder">
                                <LoadingSpinner color='#0f0' type='spinningBubbles'/>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto">
                            <MovieDetailCard movie={single_movie}/>
                            <br/>
                            <MovieGenre genre={single_movie.Genre}/>
                            <MoviePlot plot={single_movie.Plot}/>
                            <MovieActors actors={single_movie.Actors}/>
                            <MovieProducer producer={single_movie.Production}/>
                            <MovieDirector director={single_movie.Director}/>
                            <MovieWebsite website={single_movie.Website}/>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            )
        )
    }
};

const mapStateToProps = state => {
    let {loading, single_movie} = state;
    return {
        single_movie: single_movie,
        loading: loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadSingleMovie: (title, year) => dispatch(loadSingleMovie(title, year)),
        clearSingleMovie: () => dispatch(clearSingleMovie())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)