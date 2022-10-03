import React from 'react'
import loading from '../images/loading.gif';
function Spinner() {
  return (
    <div className='spinner'>
      <img src={loading} alt="none" />
      </div>
  )
}

export default Spinner