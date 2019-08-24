import React, { PureComponent } from 'react';
import CoinButton from '../components/CoinButton';

class HomeComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      coins: ['btc', 'ltc', 'eth']
    };
  }

  componentWillMount = () => {
    console.log('HomeComponent will mount');
  }

  componentDidMount = () => {
    console.log('HomeComponent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('HomeComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('HomeComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('HomeComponent did update');
  }

  componentWillUnmount = () => {
    console.log('HomeComponent will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="HomeComponentWrapper">
        <h1>Crypto Prices Yo!</h1>
        {this.state.coins.map(item => (
          <div>
            <CoinButton name={item}> ></CoinButton>
          </div>
        ))}
      </div>
    );
  }
}



export default HomeComponent;
