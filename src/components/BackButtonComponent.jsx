import React, { PureComponent } from 'react';

class BackButtonComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('BackButtonComponent will mount');
  }

  componentDidMount = () => {
    console.log('BackButtonComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('BackButtonComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('BackButtonComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('BackButtonComponent did update');
  }

  componentWillUnmount = () => {
    console.log('BackButtonComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="BackButtonComponentWrapper">
        Test content
      </div>
    );
  }
}

BackButtonComponent.propTypes = {
  // bla: PropTypes.string,
};

BackButtonComponent.defaultProps = {
  // bla: 'test',
};

export default BackButtonComponent;
