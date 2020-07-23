import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './ProfilePic2.css'
import SvgIcons from '../../shared/SVGIcons/SvgIcons'
import { getProfile, updateProfile } from '../../../services/profile'

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

class ProfilePic2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: '',
      show: false
    }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const res = await getProfile(id)
    console.log(res)
    this.setState({
      profilePicture: res.profilePicture
    })
  }
  // handleOpen = () => {
  //   this.setState({
  //     show: true
  //   })
  // }
  // handleClose = () => {
  //   this.setState({
  //     show: false
  //   })
  // }
  // handleChange = (event) => {
  //   const { value } = event.target
  //   this.setState({
  //       profilePicture: value
  //   })
  // }
  // async handleSubmit() {
  //   let { id } = this.props.match.params
  //   const pic = await updateProfile(id, this.state.profilePicture)
  //   this.setState({
  //     pic
  //   })
  // }
  render() {
    const pic = this.state.profilePicture
    return (
      <>
        <button className='circle'
          onClick={this.handleOpen}>
          <div className='head'></div>
          <div className='shoulder'></div>
          <div className='cameraC'>
            <div style={styles}>
              <SvgIcons name='camera'
                width={39}
                fill='#051d54' />
            </div>
          </div>
        </button>
        {pic ?
          <div className='circleTwo'
            style={{
              backgroundImage: `url(${pic})`
            }}>
          </div>
          :
          <div className='circleTwo'
            style={{
              background: 'transparent'
            }}>
          </div>}
        {/* {this.state.show ?
          <>
            <div className='picMenu'>
              <div className='imgInput'>
                <label className='imgL'>please enter the url for your profile image</label>
                <input className='imgI' defaultValue={this.state.profilePicture} onChange={this.handleChange}></input>
                <button className='imgB' onclick={this.handleSubmit}>Submit</button>
              </div>
              <button className='fake' onClick={this.handleClose}></button>
            </div>
          </>
          :
          null}
      </> */}
      </>
    );
  }
}

export default withRouter(ProfilePic2);




