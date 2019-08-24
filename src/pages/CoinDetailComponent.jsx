import React, { PureComponent } from 'react';

class CoinDetailComponent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      coinData: {},
      lastUpdated: ''
    };
  }

  componentWillMount = () => {
    console.log('CoinDetailComponent will mount');
  }

  getCoin = (coinname) => {
    
    const coinUrl = `https://financialmodelingprep.com/api/v3/cryptocurrency/${coinname}`;
    // https://financialmodelingprep.com/developer/docs/#Cryptocurrencies
    // https://financialmodelingprep.com/api/v3/cryptocurrencies

    fetch(coinUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result' + coinname, result);

          this.setState({
            isLoaded: true,
            coinData: result,
            lastUpdated: new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'

            }).format(Date.now())

          });
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

  componentDidMount = () => {
    console.log('CoinDetailComponent mounted');

    const coinname = this.props.match.params.id;
    this.getCoin(coinname);

    let youCanGetWithThisOrYouCanGetWithThat = this;
    setInterval(function(){
      youCanGetWithThisOrYouCanGetWithThat.getCoin(coinname);
    }, 1000 * 60 * 60);

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

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CoinDetailComponentWrapper">

        <h1> {this.props.match.params.id} price is {this.state.coinData.price} </h1>
        <h2> Last Update at: {this.state.lastUpdated}
        </h2>
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
