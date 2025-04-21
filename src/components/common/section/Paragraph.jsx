import React from 'react'

const Paragraph = ({children}) => {
  return (
    <p className='text-dark/80 text-center my-3 text-sm sm:text-base' >{children}</p>
  )
}

export default Paragraph