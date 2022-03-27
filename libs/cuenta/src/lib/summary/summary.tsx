import { Component } from 'react';
import './summary.module.scss';

class Summary extends Component {
  render() {
    return (
      <h1>Elegiste {this.props.quantity === 1 ? 'platillo' : 'platillos'} .</h1>
    );
  }
}
export default Summary;
