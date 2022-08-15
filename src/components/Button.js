import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Buttons extends Component {
  render() {
    return (
      <div>
      <Button onClick={() => this.props.disableButton} variant='danger'>DISABLE</Button>
      </div>
    )
  }
}
