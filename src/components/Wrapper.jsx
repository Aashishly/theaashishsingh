import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={`w-full max-w-[1280px] px-5 mx-auto ${className || ""}`}>
        {children}
    </div>
  )
}

export default Wrapper