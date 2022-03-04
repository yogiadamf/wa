import React from "react";
import "./Profile.css";
import "./Search.css"

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://api.whatsapp.com/send/?phone=${this.state.value}&text&app_absent=0`;
  };
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text">
                Masukkan Nomor WhatsApp Di Sini.
              </span>
            </div>
            <div className="profile-details-role">
              <div class="search_wrap search_wrap_6">
                <div class="search_box">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="number"
                      class="input"
                      placeholder="Ex.628123456789"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="btn highlighted-btn">
                      Chat<i className="fa fa-whatsapp fa-fw"></i>
                    </button>
                  </form>
                </div>
              </div>
              <span className="profile-role-tagline">
                Chat WhatsApp Tanpa Menyimpan Nomor Handphone
              </span>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
