import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { moviesList } from '../store/actions';

class Home extends Component{

    getMoviesHandler(){
        this.props.dispatch(moviesList())
    }

    render(){
        console.log(this.props)
        return(
            <>
                <button onClick={()=> this.getMoviesHandler()}>
                    Get movies
                </button>
            </>
        )
    }
}

export default connect()(Home);