import React from 'react'

function Footer() {
    const year = new Date()
  return (
     <>
      <p className='footer'>Copyright &copy; {year.getFullYear()}</p>
     </>
  )
}

export default Footer