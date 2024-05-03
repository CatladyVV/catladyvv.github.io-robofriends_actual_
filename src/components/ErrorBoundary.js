import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){ // allow this.props 
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, message){
        this.setState({hasError: true})
    }
    render(){        
        if (this.state.hasError){
            return <h1>Error.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;