import React from "react";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../utilities/ScrollService";
import Animations from "../utilities/Animation";
import "./Docs.css";

import VideoPlayer from "react-video-js-player";
import Wa from "../assets/Home/wa.mp4"
import Poster from "../assets/Home/poster.png"

export default function Docs(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  return (
    <div
      className="docs-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="docs-parent">
        <ScreenHeading title={"Dokumentasi"} subHeading={"Dokumentasi Penggunaan WhatsApp"} />
        <div className="docs-card">
        <VideoPlayer
          src={Wa}
          poster={Poster}
          height = "520"
          width="820"
        />  
        </div>
      </div>
    </div>
  );
}
