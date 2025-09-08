// src/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red' }}>
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
