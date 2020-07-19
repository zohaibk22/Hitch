import React from 'react';
import './Splash.css'

function Splash(props) {
  return (
    <div className='splash'>
      {/* <img src='https://i.imgur.com/zIopf1S.jpg'/> */}
      <div className='welcome'>
        <h1>Welcome to Hitch!</h1>
        <p>The college carpool planner</p>
      </div>
    </div>
  );
}

export default Splash;