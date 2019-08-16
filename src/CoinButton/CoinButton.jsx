import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CoinButton.styles';
import {  Link } from "react-router-dom";

let coinname;

class CoinButton extends PureComponent {
  constructor(props) {
    super(props);
      
    coinname = this.props.name
    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CoinButton will mount');
  }

  componentDidMount = () => {
    console.log('CoinButton mounted');

    const coinname = this.props.name;
    const topUrl = `https://financialmodelingprep.com/api/v3/cryptocurrency/${coinname}`;

    fetch(topUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result' + coinname, result);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CoinButton will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CoinButton will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CoinButton did update');
  }

  componentWillUnmount = () => {
    console.log('CoinButton will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CoinButtonWrapper">

        <Link to={{
          pathname: '/details/' + coinname
          }}>

          <button>
            {coinname}

          </button>

        </Link>

      </div>
    );
  }
}

CoinButton.propTypes = {
  // bla: PropTypes.string,
};

CoinButton.defaultProps = {
  // bla: 'test',
};

export default CoinButton;
