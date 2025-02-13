import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        <div className='logo'>
          <img src='logo/fd-safe-logo.png' alt='logo' width="72" height="30"></img>
        </div>

        <div className='links flex space-x-8'>
          {["Services", "Our Work", "About Us", "Insigths", "contact"]
              .map((item,index)=>(<a key={index} className={`text-lg capitalize font-medium ${index === 4 && "ml-32"}`}>{item}</a>
          ))}
        </div>
      </div>
  )
}

export default Navbar