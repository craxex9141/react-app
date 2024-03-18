//import React from 'react'
import PropTypes from 'prop-types'

// 4.Creating props
const Header=({title})=>{
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>
          Add 
        </button>
    </header>//
  )
// 5.PropTypes
  Header.defaultProps = {
    title: 'TaskTracker',
  }
  Header.propTypes = {
    title:'PropTypes.string.isRequired',  
  }
// 6.Inline css:styling head.
//  CSS in js
const HeadingStyle=
  {
    color:'red', 
    background:'black',
  }

}

export default Header