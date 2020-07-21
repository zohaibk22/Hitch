import React from 'react';
import './PopUp.css'

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
}

function PopUp(props) {
  return (
    <div className='pop'>
      <button className='close'>
        <p className='ex'>+</p>
      </button>
      <p className='titleOne'>Don't be a stranger!</p>
      <p className='sentence'>Add a photo of yourself for fellow drivers to recognize you.</p>
      <button className='willDo'>Will Do</button>
    </div>
  );
}

export default PopUp;