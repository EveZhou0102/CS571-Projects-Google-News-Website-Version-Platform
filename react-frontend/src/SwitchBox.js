import React, { Component } from "react";
import Switch from "react-switch";

class SwitchBox extends Component {
  constructor(props) {
    super(props);
    const checked = this.props.company === "nytimes" ? false : true;
    this.state = {
      checked: checked,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      checked: checked,
    });
    this.props.onclick(checked);
  }

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        onColor="#008efb"
        offColor='#d8d9d9'
        checkedIcon={false}
        uncheckedIcon={false}
      />
    );
  }
}

export default SwitchBox;