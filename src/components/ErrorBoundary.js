import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch () {
    this.setState({
      hasError: true
    });
  }

  render () {
    if (this.state.hasError) {
      return <h2>Ooops. Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
