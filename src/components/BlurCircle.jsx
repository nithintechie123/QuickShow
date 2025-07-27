import React from 'react'

const BlurCircle = (props) => {
    const {top="auto",left="auto",right="auto",bottom="auto"}=props

  return (
    <div className='absolute -z-50 h-58 w-58 aspect-square
    rounded-full bg-primary/30 blur-3xl' 
    style={{top:top,left:left,right:right,bottom:bottom}}>
        
    </div>
  )
}

export default BlurCircle