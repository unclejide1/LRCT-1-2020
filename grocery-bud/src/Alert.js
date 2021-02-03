import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
