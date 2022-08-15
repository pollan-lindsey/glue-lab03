import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isEnabled: true
    }
  }
    disableButton = () => {
        this.setState({isEnabled: false}); 
        // () => console.log(this.state.isEnabled);
    }

    enableButton = () => {
        this.setState({isEnabled: true}); 
        // () => console.log(this.state.isEnabled);
    }

    render() {
    return (
      <>

      </>
    )
  }
}
