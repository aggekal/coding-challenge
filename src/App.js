import React, { Fragment, Component } from 'react';
import './App.css';
import UserForm from './UserForm';
import HowTo from './HowTo';
import Main from './Main';
import { useState } from 'react';




const App = () => {

const [info,setInfo] = useState('landing');
const [showHow,setHow] = useState(false);
const name  = (text) => {
  
  setInfo(text.text);
  
}

const logout  = (text) => {
  
  setInfo(text);
  
}


if(info=='landing'){

  return (

 <div className="App"> 

        
        <UserForm onAdd={name} /> 
        <h3 style={{cursor: "pointer"}} onClick={() => setHow(!showHow)}>How To</h3>
        {showHow && <HowTo />}
    
      </div>

  );
}
else{
  return (

 <div className="App"> 
  
    
         <Main name2={info} checkState={logout}/>  
      
    
      </div>

   
  );
}
}




export default App;
