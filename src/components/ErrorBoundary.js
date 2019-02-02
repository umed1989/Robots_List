import React, { Component } from "react";

class ErroBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>There's an Error</h1>;
    }
    return this.props.children;
  }
}

export default ErroBoundary;
