import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './PopUp.css'

class PopUp extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      show: true
    }
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <>
        {this.state.show ?
          <div className='pop'>
            <button className='close'
              onClick={this.handleClose}>
              <p className='ex'>+</p>
            </button>
            <p className='titleOne'>Don't be a stranger!</p>
            <p className='sentence'>Add a photo of yourself for fellow drivers to recognize you.</p>
            <button type='submit'
              className='willDo'>
              Will Do
            </button>
          </div>
          :
          null
        }
      </>
    );
  }
}

export default withRouter(PopUp);