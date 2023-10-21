/*const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }*/


  const Notification = ({ notification }) => {
    if (notification === null) {
      return null
    }
    const className = `message ${notification.color}`
    return (
      <div className={className} >
        {notification.message}
      </div>
    )
  }

  export default Notification; 

/*  import React from 'react'

const Notification = ({ msg, type }) => {
  if (msg === null) {
    return null
  }

  return (
    <div className={type}>
      {msg}
    </div>
  )
}

export default Notification*/