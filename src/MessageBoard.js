import React, { Component } from 'react';
import { useState } from 'react';

class MessageBoard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			messages : this.props.mes,
			board : this.props.mes
		}

	}


componentWillReceiveProps(nextProps) {
if (nextProps.mes != this.state.messages) {
console.log(nextProps) 
this.setState({messages:nextProps.mes})
this.setState({board: this.state.board+'\n'+nextProps.mes})
}
}


 // this.setState({messages: this.props.mes});

render(props){

		return(
			<div>
			<div className="messageBoardHeader"><b>MessageBoard</b></div>
			 <div style={{overflow:"auto"}} className='new-line'>{this.state.board}</div>
			</div>
		)

	}
}

export default MessageBoard;