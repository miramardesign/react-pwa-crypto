import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CoinPriceDateComponent.styles';

class CoinPriceDateComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CoinPriceDateComponent will mount');
  }

  componentDidMount = () => {
    console.log('CoinPriceDateComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CoinPriceDateComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CoinPriceDateComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CoinPriceDateComponent did update');
  }

  componentWillUnmount = () => {
    console.log('CoinPriceDateComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CoinPriceDateComponentWrapper">
        Test content
      </div>
    );
  }
}

CoinPriceDateComponent.propTypes = {
  // bla: PropTypes.string,
};

CoinPriceDateComponent.defaultProps = {
  // bla: 'test',
};

export default CoinPriceDateComponent;
