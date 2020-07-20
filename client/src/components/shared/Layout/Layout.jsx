import React from 'react'
import './Layout.css'

<!-- import './Layout.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Main from '../Main'

const Layout = (props) => (
  <div className='layout'>
    <Header />
    <Main />
    <Footer /> -->
<!--   </div> -->



const Layout = (props) => (
    <div className='layout'>
      
        <div className="layout-children">
            {props.children}
        </div>
     
    </div>
)

export default Layout