import React, { Fragment,Component,useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';


// class Card extends React.Component {

// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			faceUp : this.props.faceUp
// 		}
// 	}

// 	flip(){
// 		if(this.props.clickable){
// 		this.setState({ faceUp: !this.state.faceUp})
// 		if(this.props.points==0){
			
// 		}
// 		else{
		
// 		}
// 		this.props.onFlip(this.props.points)
// 	}
// }
 
// componentWillUpdate(nextProps) {
//  this.state.faceUp=nextProps.faceUp

// }
// 	render(props){
// 		const { faceUp } = this.state
//     const { front, back } = this.props
// 		return(
	
// 			<div className={this.state.faceUp ? 'faceUp' : 'faceDown'} onClick={this.flip.bind(this)}>
// 				<p className="card">{this.state.faceUp && this.props.points}</p>
// 			</div>

	
// 		)
// 	}
// }


const Card = ({faceUp,clickable,onFlip,points}) => {

	
	const [faceUp2,setFaceUp] = useState(faceUp)

 const { transform } = useSpring({
    transform: `perspective(100cm) rotateY(${faceUp2 ? 180 : 0}deg)`,
    config: config.stiff
  })




useEffect(() => {
    console.log('Prop Received 3: ',faceUp);
    setFaceUp(faceUp)
}, [faceUp])

	const flip = () => {
		if(clickable){
		//this.setState({ faceUp: !this.state.faceUp})
		setFaceUp(!faceUp2)
		
		onFlip(points)
	}
}
 


return(
	
			// <div className={faceUp2 ? 'faceUp' : 'faceDown'} onClick={flip.bind(this)}>
			// 	<p className="card">{faceUp2 && points}</p>
			// </div>

	 <div className="card2" onClick={flip}>
      <animated.div className="front" style={{ transform }}>
      </animated.div>
      <animated.div className="back" style={{ transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
        <p className="card">{faceUp2 && points}</p>
      </animated.div>
    </div>
	

		)
	
}

export default Card;