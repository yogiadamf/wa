/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Typical from "react-typical";

import imgBack from "../../src/images/mailz.jpeg";
import load1 from "../../src/images/load2.gif";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../utilities/ScrollService";
import Animations from "../utilities/Animation";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  function notif() {
    alert("Message has been sent!. I will contact you soon 😎.");
  }
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1ojrij",
        "template_enfh8qe",
        form.current,
        "user_RJoBK8IKTuKVu0MnH3N5X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://api.whatsapp.com/send/?phone=+6281515204215&text&app_absent=0">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="yogiadamf@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://web.facebook.com/yogiadamf">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/yogiadamfirdaus/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/yogiadamf?tab=repositories">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yogi-adam-firdaus-9bb34415b/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yogiadamf19">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name} />

            <label htmlFor="email">To Me</label>
            <input
              type="email"
              name="email"
              defaultValue={"yogiadamf@gmail.com"}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit" onClick={notif}>
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text"> Copyright © 2022 Yogi Adam Firdaus </p>
      </div>
    </div>
  );
}
