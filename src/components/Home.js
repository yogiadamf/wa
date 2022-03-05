import React from 'react'
import Header from './Header'
import Profile from './Profile'
import "./Home.css"
import End from './End'

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Profile/>
      <End/>
    </div>
  )
}
