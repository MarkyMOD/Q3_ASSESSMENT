import React, { Component } from 'react';
import MessageList from './components/MessageList';

class App extends Component {

  state = {
    messages: []
  }

  componentDidMount = async () => {
    const response = await fetch('https://assessmentme.herokuapp.com/messages/')
    const json = await response.json()
    this.setState({ messages: json })
  }

  postServer = async (posting, textField1, textField2, e) => {
    e.preventDefault()
    const response = await fetch(`https://assessmentme.herokuapp.com/messages/`, {
      method: 'POST',
      body: JSON.stringify(posting),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    this.setState({messages: [...this.state.messages, data]})

    textField1.value = ""
    textField2.value = ""
  }

  patchServer = async (body, id, textField1, textField2, e) => {
    e.preventDefault()
    if(id===0){
      window.alert("Please Select a Message")
      return
    }
    const response = await fetch(`https://assessmentme.herokuapp.com/messages/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    const map = this.state.messages.map(id => id.id)
    const index = map.indexOf(id)
    this.setState({messages: [...this.state.messages.slice(0, index), data, ...this.state.messages.slice(index + 1)]})

    textField1.value = ""
    textField2.value = ""
  }

  deleteServer = async (id, e) => {
    e.preventDefault()
    const response = await fetch(`https://assessmentme.herokuapp.com/messages/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    console.log("data", data)
    const clone = this.state.messages.filter(message => message.id !== id)
    this.setState({messages: [...clone]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <MessageList messages={this.state.messages} postServer={this.postServer} deleteServer={this.deleteServer} patchServer={this.patchServer}/>
        </div>
      </div>
    )
  }
}

export default App;
