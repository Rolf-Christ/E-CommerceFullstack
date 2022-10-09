import React from 'react'

function MsgInfo() {
  return (
  <div className="message-holder">
  <div className="alert alert-success alert-dismissible fade show" role="alert">
      <button type="button" className="close" data-dismiss="alert">
          <small><i className="fas fa-times"></i></small>
      </button>
      <i className="fas fa-check-circle mr-2"></i>
      This is a success alert message.
  </div>
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <button type="button" className="close" data-dismiss="alert">
          <small><i className="fas fa-times"></i></small>
      </button>
      <i className="fas fa-times-circle mr-2"></i>
      This is a error alert message.
  </div>
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <button type="button" className="close" data-dismiss="alert">
          <small><i className="fas fa-times"></i></small>
      </button>
      <i className="fas fa-exclamation-circle mr-2"></i>
      This is a warning alert message.
  </div>
  <div className="alert alert-info alert-dismissible fade show" role="alert">
      <button type="button" className="close" data-dismiss="alert">
          <small><i className="fas fa-times"></i></small>
      </button>
      <i className="fas fa-info-circle mr-2"></i>
      This is a info alert message.
  </div>
</div>
  )
}

export default MsgInfo