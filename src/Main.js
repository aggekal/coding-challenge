import React, { Fragment,Component } from 'react'
import Card from './Card';
import MessageBoard from './MessageBoard';
import { useState } from 'react';



const Main = ({name2,checkState}) => {
var c=null;
var startButtons=null;
var randomNumbers = [];
	const [info2,setInfo2] = useState();
	const [credits,setCredits] = useState(100);
	const [Round,setRound] = useState(1);
	const [pool,setPool] = useState(0);
	const [view,setView] = useState(false);
	const [Started,setStarted] = useState(false);
	const [f1,setF1] = useState(false);
	const [txt,setTxt] = useState('Welcome! Press Start Game. Cost = 10 cr.');
	const [allowClick,setAllowClick] = useState(false);
	const [p,setP] = useState({p1:0,p2:3,p3:6,p4:9});
 const sendPoints  = (text) => {
  
   setInfo2(text);
  
 }

const logout = () => {
			console.log('log')
			checkState('landing');
		}

//let p = {"p1":0,"p2":3,"p3":6,"p4":9}
let face = {"p1":false,"p2":false,"p3":false,"p4":false}
const Draw = () => {
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
for (const property in p) {
 
  const random = Math.floor(Math.random() * cards.length);

 randomNumbers.push(cards[random])
  cards.splice(random, 1);
}
  
  if(randomNumbers.find(zero)==undefined){
  	const randomPos = Math.floor(Math.random() * 3);
  	console.log(randomPos);
  	randomNumbers[randomPos]=0;
  }
 setP({p1: randomNumbers[0],p2: randomNumbers[1],p3:randomNumbers[2],p4:randomNumbers[3]})
console.log(randomNumbers);


}

const shuffle2 = () =>{
	shuffleArr(randomNumbers);
	setP({p1: randomNumbers[0],p2: randomNumbers[1],p3:randomNumbers[2],p4:randomNumbers[3]})
}
function zero() {
  return 0;
}
const show = (f) => {

	console.log('flipped',f)
	setTxt('You flipped '+f);
	if(f!=0){
		console.log('Winner')
		setPool(pool+(f*Round))
		setRound(Round+1)
		setAllowClick(false)
		setTxt('You won! Pool updated'+'\n'+' Press Start Round for next round ')
	
		setTimeout(
    function() {
        setView(false);
	
    }
    ,
    3000
);
	}
	else{
		console.log('Loser')
			setTimeout(
    function() {
        	setStarted(false);
			setView(false);
			setRound(1);
			setPool(0);
			setTxt('You lost! Game over')

       
    }
    ,
    3000
);
	
	}
}

const changeView = () => {
	setAllowClick(false);
	setView(true);	
	setTxt('Drawing cards from deck...');
	Draw();
	setTimeout(
    function() {
        setTxt('Revealing Cards')
       setF1(true);
    }
    ,
    3000
);


setTimeout(
	
    function() {
    	setTxt('Hiding and Shuffling Cards')
       
       setF1(false);
    shuffle2();
     setTxt('Please pick a card')
    setAllowClick(true);
    }
    ,
    6000
);

}

const StartGame = () => {
	if(credits<10){
			setTxt('Not enough credits. See you next time!')
			
			setTimeout(
	
    function() {
    	logout();
    }
    ,
    4000
);
	
	}
	else{
	setCredits(credits-10);
	setStarted(true);
	setTxt('Start new round');
	}
}

const forfeit = () => {
	

	setTimeout(
	
    function() {
    	setTxt('Game Over. Amount added to your credits balance!')
    setStarted(false);
	setView(false);
	setCredits(credits+pool);
	setRound(0);
	setPool(0);
	setAllowClick(false);
    }
    ,
    3000
);
}

function shuffleArr(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


  c=<div >	<div className="row"><Card  id={1}  points={p.p1} onFlip={show} faceUp={f1} clickable={allowClick}/></div>
					<div className="row"><Card id={2} points={p.p2} onFlip={show} faceUp={f1} clickable={allowClick}/></div>
					<div className="row"><Card id={3}  points={p.p3} onFlip={show} faceUp={f1} clickable={allowClick}/></div>
					<div className="row"><Card id={4}  points={p.p4} onFlip={show} faceUp={f1} clickable={allowClick}/></div>

	</div>

startButtons = <div><input className="btn" type="button" value="Start Round" onClick={changeView}/>
					<input className="btn" type="button" value="Forfeit" onClick={forfeit}/>
					</div>

		return(
		<div>
		<div className="buttonBar">
			<div className="rows">
		
					<div className="row" style={{float:"left"}}><p><b>{name2}</b></p></div>
					<div className="row"><p>Credits: {credits}</p></div>
					<div className="row"><p>Round: {Round}</p></div>
					<div className="row"><p>Pool: {pool}</p></div>
			</div>
			<div><input style={{float:"right"}}className="btn" type="button" value="Logout" onClick={logout}/>
					{(Started) ? startButtons : <input className="btn" type="button" value="Start Game" onClick={StartGame}/> }
					<div className="rows2">{(view) ? c : '' }</div>
					
			</div>
			
			</div>
			<div>
			<MessageBoard mes={txt}/>
			</div>
		</div>
			
	
		)
	}


export default Main;