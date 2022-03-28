import { Component } from 'react';
import './summary.module.scss';

interface SummaryProps {
  quantity: unknown;
  total: unknown;
}

class Summary extends Component<SummaryProps> {
  render() {
    return (
      <h1>Elegiste {this.props.quantity === 1 ? 'platillo' : 'platillos'} .</h1>
    );
  }
}
export default Summary;
