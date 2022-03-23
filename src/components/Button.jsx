import React from 'react'
import propTypes from 'prop-types'

const Button = ({color, text}) => {

    const onClick = () => {
        console.log("I clicked")
    }

  return(
    <button style={{backgroundColor: color}}
            className='btn'
            onClick={onClick}
            >
            {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string 
}
export default Button