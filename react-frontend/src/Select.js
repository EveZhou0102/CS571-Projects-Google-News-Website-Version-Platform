import React from "react";
import AsyncSelect from "react-select/async";
import { withRouter } from 'react-router-dom';


const promiseOptions = inputValue =>
  fetch("https://zhouqi-usc.cognitiveservices.azure.com/bing/v7.0/suggestions?q=" + inputValue,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": "a7d0bc9b1f7e490aa177f5e042e46187"
      }
    }
  ).then(res => res.json())
    .then(data => data.suggestionGroups[0].searchSuggestions.map(item => ({
      label: item.displayText,
      value: item.displayText
    })));

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    const newData = nextProps.history.location;
    if (newData.pathname === "/search") {
      this.setState({
        selected: undefined,
      })
    } else {
      this.setState({
        selected: newData.search.slice(3),
      })
    }
  }

  handleClick(option) {
    this.props.history.push("/search?q=" + option.value);
  }

  render() {
    return (
      <AsyncSelect
        placeholder="Enter keyword .."
        defaultOptions={[]}
        value={this.state.selected}
        onChange={(option) => this.handleClick(option)}
        loadOptions={inputValue => {
          if (inputValue === "" || undefined) {
            return [];
          } else {
            return promiseOptions(inputValue);
          };
        }} />
    );
  }
}

export default withRouter(Select);