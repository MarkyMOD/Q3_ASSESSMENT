import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  state = {
    post: {name: "", message: ""},
    update: {name: "", message: ""},
    id: 0
  }

  deleteRoute = (id, e) => {
    this.props.deleteServer(id, e)
  }

  updateRoute = (id) => {
    this.setState({ id:id })
  }

  render() {
    let messageList = this.props.messages.map(message => <Message key={message.id} message={message.message} name={message.name} id={message.id} deleteRoute={this.deleteRoute} updateRoute={this.updateRoute}/>)

    return (
      <div className="container">
        <div className="list-group">
          {messageList}
        </div>
        <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Name" onKeyUp={e => this.setState({ update: {...this.state.update, name: e.target.value}, updateField1: e.target})}/>
            <input className="form-control mr-sm-2" type="text" placeholder="Message" onKeyUp={e => this.setState({ update: {...this.state.update, message: e.target.value}, updateField2: e.target})}/>
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={e => this.props.patchServer(this.state.update, this.state.id, this.state.updateField1, this.state.updateField2, e)}>Update Selected</button>
        </form>

        <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Name" onKeyUp={e => this.setState({ post: {...this.state.post, name: e.target.value}, postField1: e.target})}/>
            <input className="form-control mr-sm-2" type="text" placeholder="Message" onKeyUp={e => this.setState({ post: {...this.state.post, message: e.target.value}, postField2: e.target})}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => this.props.postServer(this.state.post, this.state.postField1, this.state.postField2, e)}>Submit</button>
        </form>
      </div>
    )
  }

}

export default MessageList
