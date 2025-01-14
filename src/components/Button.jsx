import React from 'react'

function Button({name,isRed}) {
  return (
    <div className=' mb-12 '>
      {isRed?(<button className='bg-red-500 px-10 py-3 text-white rounded-[5px]'>{name} </button>):(<button className='bg-green-500 px-10 py-3 text-white rounded-[5px]'>{name} </button>)}
       
    </div>
  )
}

export default Button