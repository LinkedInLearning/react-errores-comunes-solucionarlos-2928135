import './cuenta.module.scss';
import Summary from './summary/summary';

/* eslint-disable-next-line */
export interface CuentaProps {}

export function Cuenta(props: CuentaProps) {
  return (
    <div>
      <h1>Welcome to Cuenta!</h1>
      <Summary quantity={1} total={10} />
    </div>
  );
}

export default Cuenta;
