import React, { Component } from 'react';
import { useState } from 'react';
import logo from './logo.jpg';
const UserForm = ({ onAdd }) => {


		const [text,setText] = useState('');

		const onSubmit = (e) => {
			e.preventDefault()
			if(text==""){
				alert('Please type a name')
				return;
			}
			onAdd({text})
		}
		return(
			<div>
			<img src={logo} alt="Logo" />
				<form onSubmit={onSubmit} >
					<div style={{margin: 10}}><input id="name" className="textbox" type="text" placeholder="Nickname..." value={text} onChange={(e) =>{
						setText(e.target.value)
					}}/></div>
				
					<div style={{marginTop: 50}}><input className="btn" type="submit" value="Play"/></div>

				</form>

			</div>
		)

	}


export default UserForm;