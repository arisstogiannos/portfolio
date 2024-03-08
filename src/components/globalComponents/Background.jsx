import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed top-0 left-0 hidden'>
        <div className='w-60 h-60 bg-mblue filter blur-[50px] rounded-full animate-background absolute top-0 left-0'></div>
    </div>
  )
}

export default Background