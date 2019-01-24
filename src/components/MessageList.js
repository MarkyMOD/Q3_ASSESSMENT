import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {


  render() {
    console.log("id", this.state.id)
    console.log("post", this.state.post, "postfield", this.state.postField)
    let messageList = this.props.messages.map(message => <Message key={message.id} message={message.message} name={message.name} />)

    return (
      <div className="container">
        <div className="list-group">
          {messageList}
        </div>
        <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Name" />
            <input className="form-control mr-sm-2" type="text" placeholder="Message" />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" >Update Selected</button>
        </form>

        <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Name" />
            <input className="form-control mr-sm-2" type="text" placeholder="Message" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Submit</button>
        </form>
      </div>
    )
  }

}

export default MessageList
