import  { Component } from 'preact'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.showMessage = this.showMessage.bind(this)
  }
  showMessage() {
    window.alert('Hi! User')
  }
  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Click Here!</button>
      </div>
    )
  }
}