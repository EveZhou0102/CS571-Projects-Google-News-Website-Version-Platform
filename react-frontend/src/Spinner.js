import React from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 20%;
  border-color: red;
  border-radius: 100%;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.isLoading,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoading !== prevProps.isLoading) {
      this.setState({
        loading: this.props.isLoading,
      });
    }
  }

  render() {
    const display = this.state.loading ? "block" : "none";
    return (
      <div className="sweet-loading">
        <BounceLoader
          css={override}
          size={60}
          color={"#2b4fcb"}
          loading={this.state.loading}
        />
        <p style={{ textAlign: "center", display: display }}>Loading</p>
      </div>
    );
  }
}

export default Spinner;