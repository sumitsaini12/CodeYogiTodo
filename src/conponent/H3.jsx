import React from 'react'

 function H3(props) {
  return (
    <>
    <h3 className="text-xl sm:text-2xl font-bold">{props.children}</h3>
    </>
  )
}

export default H3;