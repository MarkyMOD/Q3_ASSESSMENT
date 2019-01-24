import React, { Component } from 'react'

class Message extends Component {

  render() {
    return (
      <div className="row message read">
        <div className="col-1">
          <div className="row">
            <div className="col-2">
              <input type="radio" name="message" onChange={e => this.props.updateRoute(this.props.id)}/>
            </div>
          </div>
        </div>
        <div className="col-5">
        <span className="text-danger"> Name: </span>
        {this.props.name}
        </div>
        <div className="col-5">
          <div className="row message-body">
            <div className="col-11 col-offset-1">
            <span className="text-danger"> Message: </span>
              {this.props.message}
            </div>
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-default" onClick={e => this.props.deleteRoute(this.props.id, e)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>


    )
  }
}

export default Message
