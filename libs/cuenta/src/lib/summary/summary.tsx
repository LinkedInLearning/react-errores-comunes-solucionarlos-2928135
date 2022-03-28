import { Component } from 'react';
import './summary.module.scss';

interface SummaryProps {
  quantity: number;
  total: number;
}

type ClientType = 'regular' | 'frequent';

interface Customer {
  name: string;
  email: string;
  type: ClientType;
}

type Level = 'primary' | 'occasional';

interface Provider {
  name: string;
  email: string;
  phone: string;
  level: Level;
  pendingBill: number;
  active: boolean;
}

class Summary extends Component<SummaryProps> {
  render() {
    return (
      <h1>Elegiste {this.props.quantity === 1 ? 'platillo' : 'platillos'} .</h1>
    );
  }
}
export default Summary;
