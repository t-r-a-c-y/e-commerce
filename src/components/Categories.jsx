import React from 'react'
import cellPhone from '../assets/cellPhone.png'

function Categories() {
  return (
    <div className='my-9 flex justify-between'>
        <Category imgs={cellPhone} names="Phone"   />   
        <Category imgs={cellPhone} names="Phone"   />   
        <Category imgs={cellPhone} names="Phone"   />   
        <Category imgs={cellPhone} names="Phone"   />   
        <Category imgs={cellPhone} names="Phone"   />   
        <Category imgs={cellPhone} names="Phone"   />   
    </div>
  )
}

export default Categories

function Category(props){
    return(
        <div className='border-[1.5px] rounded-[8px] border-[#a99b9b] w-36 text-center py-5 hover:bg-red-500 hover:border-none'>
        <img src={props.imgs} alt="" className='pl-11 mb-2' />
        <p>{props.names}</p>
    </div>
    )
}