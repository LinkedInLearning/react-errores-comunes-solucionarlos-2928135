import { Component } from 'react';
import './clock.module.scss';

type clockState = {
  time: Date;
};

interface clockProps {
  name: string;
}

export class Clock extends Component<clockProps, clockState> {
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
      <div>
        Reloj: <b>{this.props.name}</b>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
