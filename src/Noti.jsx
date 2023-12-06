import React from 'react'

const Noti = ( {message} ) => {
  if(message === null) {
      return null
  }
  return (
    <div style={{margin: 30, backgroundColor: '#74d414',padding: 20}}>{message}</div>
  )
}

export default Noti