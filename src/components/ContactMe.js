/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Typical from "react-typical";
import { ToastContainer, toast } from "react-toastify";
import load1 from "../../src/images/load2.gif";
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../utilities/ScrollService";
import Animations from "../utilities/Animation";
import Lottie from "lottie-web";
import Footer from "./Footer"
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
  const [user_email, setUser_email] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setUser_email(e.target.value);
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
        () => {
          toast.success("Your email Has Been Sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        () => {
          toast.error('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      );
  };

  const container = useRef(null)

  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Home/Chating.json')
    })
  }, [])

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Mari kita tetap berhubungan"} title={"Kontak Saya"} />
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
          <div className="img-back" ref={container}>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Nama</label>
            <input type="text" name="name" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              onChange={handleEmail}
              value={user_email}
            />

            <label htmlFor="message">Pesan</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane fa-fw" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </form>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text"> Copyright © 2022 Yogi Adam Firdaus </p>
      </div>
      <Footer/>
    </div>
  );
}
