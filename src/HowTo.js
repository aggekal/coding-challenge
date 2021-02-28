import React, { Fragment, Component } from 'react';
import { useState } from 'react';




const HowTo = () => {

const [info,setInfo] = useState('landing');


  return (

 <div> 
  
   <h3><b>Welcome to the game!</b></h3>  
    <p>This is a game of risk! There are 15 cards. Each round 4 of them are presented and then flipped and shuffled.</p>
    <p>The cards points indicate their winning value when picked. Each round 3 out of 4 cards win. Card with 0 points lose</p>  
    <p>If you don't feel lucky you can end the game by choosing FORFEIT before you start a round.</p>
    <p>FORFEIT ensures you win prize pool. 0 loses it all.</p>
    <p>HAPPY GAMEPLAY</p>
    
  </div>

   
  );
}





export default HowTo;
