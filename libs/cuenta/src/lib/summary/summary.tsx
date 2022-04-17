import { Component } from 'react';
import { Customer, FullUser, Provider, User } from '../models/user.interfaces';
import './summary.module.scss';

interface SummaryProps {
  quantity: number;
  total: number;
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
