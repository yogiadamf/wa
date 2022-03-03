import React from 'react'
import Header from './Header'
import Profile from './Profile'
import "./Home.css"
import Footer from './Footer'

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}
