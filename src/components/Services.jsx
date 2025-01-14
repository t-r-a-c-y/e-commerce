import React from 'react'

function Services() {
  return (
    <div className='flex justify-around py-10 mb-14'>
      <Service />
      <Service />
      <Service /> 
    </div>
  )
}

export default Services

function Service(){
  return(
    <div className='text-center  w-[25%] flex flex-col gap-4 py-8'>
    <div className='rounded-[50%] bg-[#bcb9c1]
    w-20 text-center  py-3.5 ml-24' >
    <i class="fa-solid fa-headset fa-xl bg-black rounded-[100%] py-6 px-3" style={{color:'#ffffff'}}></i>
    </div>
    <h1 className='font-bold'>24/7 CUSTOMER SERVICE</h1>
    <p>Friendly 24/7 customer support</p>
</div>
  )
}