import './cocina.module.scss';
import { Clock } from './utils/clock';

/* eslint-disable-next-line */
export interface CocinaProps {}

export function Cocina(props: CocinaProps) {
  return (
    <div>
      <h1>Welcome to Cocina!</h1>
      <Clock name="pomodoro" />
    </div>
  );
}

export default Cocina;
