import React,{ useRef, useEffect } from "react";
import Lottie from "lottie-web";
import "./Anim.css";

export default function Anim() {
    const container = useRef(null)

  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Home/chatbg.json')
    })
  }, [])
    return (
        <div className="profile-picture">
            <div className="profile-picture-background" ref={container}>
            </div>
          </div>
    )
}
