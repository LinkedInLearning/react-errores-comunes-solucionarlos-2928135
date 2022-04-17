import { ClientType, Level } from './user.types';

export interface FullUser {
  name: string;
  email: string;
  city: string;
  age: number;
  tShirtSize: string;
  branch: string;
}

export interface Customer<T> {
  info: T;
  type: ClientType;
}

export interface Provider<T> {
  info: T;
  phone: string;
  level: Level;
  pendingBill: number;
  active: boolean;
}
