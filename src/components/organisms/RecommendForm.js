import React, {Component} from 'react';
import FormInput from '../atoms/FormInput'
import Button from "../atoms/Button";

class RecommendForm extends Component {

    formStyle = {
        maxWidth: '700px',
    };

    state = {
        movie: '',
        year: '',
        star_actors: '',
    };



    handleChange = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        return (
            <form className='mx-auto' style={this.formStyle} onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <div className="form-group">
                    <label htmlFor="movie">Movie Title*</label>
                    <FormInput handleChange={this.handleChange} required type='text' id='movie' value={this.state.movie}/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year of Release/Production*</label>
                    <FormInput handleChange={this.handleChange} required type='number' id='year' value={this.state.year}/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="star_actors">Notable actor(s)/actress(es)</label>
                    <FormInput handleChange={this.handleChange} type='text' id='star_actors' value={this.state.star_actors}/>
                </div>
                {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                <span>
                    Fields marked <i>*</i> are required
                </span>
                <Button color='success'>Submit Movie Recommendation</Button>
            </form>
        )
    }
}

export default RecommendForm