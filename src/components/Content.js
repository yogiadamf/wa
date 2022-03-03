import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ""};

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
      <form onSubmit={this.handleSubmit}>
        <label>
          No HP:
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Content;
