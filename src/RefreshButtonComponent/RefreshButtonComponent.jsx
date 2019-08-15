import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './RefreshButtonComponent.styles';

class RefreshButtonComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('RefreshButtonComponent will mount');
  }

  componentDidMount = () => {
    console.log('RefreshButtonComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('RefreshButtonComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('RefreshButtonComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('RefreshButtonComponent did update');
  }

  componentWillUnmount = () => {
    console.log('RefreshButtonComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="RefreshButtonComponentWrapper">
        Test content
      </div>
    );
  }
}

RefreshButtonComponent.propTypes = {
  // bla: PropTypes.string,
};

RefreshButtonComponent.defaultProps = {
  // bla: 'test',
};

export default RefreshButtonComponent;
