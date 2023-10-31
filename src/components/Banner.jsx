import React from 'react'
import './Banner.css'

export const Banner = ({children, styleProps}) => {
  return (
    <div className='banner-container' style={styleProps}>
      {children}
    </div>
  )
}
