import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <input {...props}/>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  onKeyPress: PropTypes.func
}

export default Input