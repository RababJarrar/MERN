import React, { Component } from 'react';

class PersonCard extends Component {
    constructor (props){
        super(props);
        this.state={
            counter:this.props.age
        }
    }

    increase = (e) =>{
        this.setState({counter :this.state.counter+1})
    }
    render() {
        return (
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.counter}</p>
                <p> Hair Color: {this.props.hairColor}</p>
                <button  onClick={this.increase}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
export default PersonCard;