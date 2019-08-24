import React, { PureComponent } from 'react';

class CoinPriceComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CoinPriceComponent will mount');
  }

  componentDidMount = () => {
    console.log('CoinPriceComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CoinPriceComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CoinPriceComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CoinPriceComponent did update');
  }

  componentWillUnmount = () => {
    console.log('CoinPriceComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CoinPriceComponentWrapper">
        Test content
      </div>
    );
  }
}

CoinPriceComponent.propTypes = {
  // bla: PropTypes.string,
};

CoinPriceComponent.defaultProps = {
  // bla: 'test',
};

export default CoinPriceComponent;
