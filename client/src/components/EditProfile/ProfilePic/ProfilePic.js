import React from 'react';
import './ProfilePic.css'
import SvgIcons from '../../shared/SVGIcons/SvgIcons'

//The code that renders the SVG files comes from a
//tutorial that can be found at the following url:
//https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

function ProfilePic(props) {
  return (
    <div className='circle'>
      <div className='head'></div>
      <div className='shoulder'></div>
      <div className='cameraC'>
        <div style={styles}>
          <SvgIcons name='camera'
            width={39}
            fill='#051d54' />
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;




