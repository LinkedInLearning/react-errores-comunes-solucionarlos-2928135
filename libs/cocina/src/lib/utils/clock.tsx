import { Component } from 'react';
import styles from './clock.module.scss';

type ClockState = {
  time: Date;
};

interface ClockProps {
  name: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  fullName = '';

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className={styles.clock}>
        Reloj: <b>{this.props.name}</b>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;