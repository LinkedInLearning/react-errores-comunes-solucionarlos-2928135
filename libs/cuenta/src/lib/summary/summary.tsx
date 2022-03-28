import { Component } from 'react';
import './summary.module.scss';

interface SummaryProps {
  quantity: number;
  total: number;
}

interface User {
  name: string;
  email: string;
}

interface FullUser {
  name: string;
  email: string;
  city: string;
  age: number;
  tShirtSize: string;
  branch: string;
}

type ClientType = 'regular' | 'frequent';

interface Customer<T> {
  info: T;
  type: ClientType;
}

type Level = 'primary' | 'occasional';

interface Provider<T> {
  info: T;
  phone: string;
  level: Level;
  pendingBill: number;
  active: boolean;
}

class Summary extends Component<SummaryProps> {
  sampleUser: Customer<string> = {
    info: 'este es un usuario de prueba',
    type: 'regular',
  };

  currentCustomer: Customer<User> = {
    info: {
      name: 'Checo',
      email: 'checo@mail.com',
    },
    type: 'frequent',
  };

  currentProvider: Provider<User> = {
    info: {
      name: 'Clark',
      email: 'clark@mail.com',
    },
    phone: '55555555',
    level: 'primary',
    pendingBill: 123000,
    active: true,
  };

  fullProvider: Provider<FullUser> = {
    info: {
      name: 'Clark',
      email: 'clark@mail.com',
      city: 'CDMX',
      age: 30,
      tShirtSize: 'XL',
      branch: 'Condesa',
    },
    phone: '55555555',
    level: 'primary',
    pendingBill: 123000,
    active: true,
  };

  render() {
    return (
      <h1>Elegiste {this.props.quantity === 1 ? 'platillo' : 'platillos'} .</h1>
    );
  }
}
export default Summary;
