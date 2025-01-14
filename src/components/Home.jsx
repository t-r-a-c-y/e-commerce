import React from 'react'
import Frame from '../assets/Frame 560.png'

function Home() {
  return (
    <div className='px-28 flex justify-between mb-24'>
        <HomeList />
        <img src={Frame} alt="" className='w-[80%] pt-10' />
    </div>
  )
}

export default Home


function HomeList() {
  const list =["Electronics","Home & Lifesyle","Medicine","Sports & Outdoor","Baby's & Toys","Groceries & Pets","Health & Beauty"];
  return (
    <div className='border-r-[1px]  border-[#a99b9b]  pr-9 pt-10' >
      <ul className='flex flex-col gap-3'>
        <li>Woman's Fashion <i class="fa-solid fa-arrow-right" style={{color: '#000000;'}}></i> </li>
        <li>Men's Fashion <i class="fa-solid fa-arrow-right" style={{color: '#000000;'}}></i> </li>
        
        {
          list.map((item)=> <li>{item} </li> )
        }
      </ul>
    </div>
  )
}