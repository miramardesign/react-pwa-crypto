import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CoinDetailComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CoinDetailComponent will mount');
  }

  componentDidMount = () => {
    console.log('CoinDetailComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CoinDetailComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CoinDetailComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CoinDetailComponent did update');
  }

  componentWillUnmount = () => {
    console.log('CoinDetailComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CoinDetailComponentWrapper">
       
         <h1> {this.props.match.params.id} price is </h1>;
      </div>
    );
  }
}

CoinDetailComponent.propTypes = {
  // bla: PropTypes.string,
};

CoinDetailComponent.defaultProps = {
  // bla: 'test',
};

export default CoinDetailComponent;
