import React from 'react';
import './DeactivatePopUp.css'

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
}

function DeactivatePopUp(props) {
  return (
    <div className='pop'>
      <div className='close'></div>
      <p className='title'>All profile information will be removed.</p>
      <p className='sentence'>Are you sure?</p>
      <button className='yes'>Yes</button>
      <button className='no'>No</button>
    </div>
  );
}

export default DeactivatePopUp;