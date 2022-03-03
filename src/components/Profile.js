import React from "react";
import "./Profile.css";

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
              <img
                alt="img-wa"
                width={200}
                height={400}
                src="https://scontent.whatsapp.net/v/t39.8562-34/178505650_460141378430025_2455877548463147186_n.png?ccb=1-5&_nc_sid=2fbf2a&_nc_ohc=-jkhE09RQG8AX8_buZG&_nc_ht=scontent.whatsapp.net&oh=01_AVwhi_b5yz5GJJkNF9slSitpzRId3K7Go_gtfIjd5aZ0Zw&oe=6225A04C"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
