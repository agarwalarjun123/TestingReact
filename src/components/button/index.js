import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };
  render() {
    return (
      <button data-test="ButtonComponent" onClick={this.submitEvent}>
        {this.props.buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
