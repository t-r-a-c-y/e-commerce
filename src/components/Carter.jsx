import React from 'react'
import Clock from './Clock'
import Product from './Product'
import Button from './Button'
import { Stater } from './Clock'
import { DivHeader ,Arrow} from './Clock'
import Categories from './Categories'
import { BestProducts } from './Product'
import Branding from './Branding'
import NewArrivals from './NewArrivals'
import Services from './Services'

function Carter({setLiked}) {
  return (
    <div className='px-28'>
        <Clock />
        <Product setLiked={setLiked}/>
        <div className='text-center'>
        <Button name="View all Product" isRed={true} />
        </div>
        <hr className='mb-4 border-[#a99b9b]' />
        <Stater name="Categories" />
        <div className='flex justify-between'>
        <DivHeader name="Browse By Category" />
        <Arrow />
        </div>
        <Categories />
        <Stater name="This Month" />
        <div className='flex justify-between'>
        <DivHeader name="Best Selling Products" />
        <Button name="View All" isRed={true} />
        </div>
        <BestProducts setLiked={setLiked} percentages="0" />
        <Branding />
        <Stater name="Our Products" />
        <div className='flex justify-between'>
        <DivHeader name="Explore Our Product" />
        <Arrow />
        </div>
        <Product setLiked={setLiked} />
        <BestProducts setLiked={setLiked} percentages="new" />
        <div className='text-center'>
        <Button name="View all Products" isRed={true} />
        </div>
        <Stater name="Featured"/>
        <DivHeader name="New Arrival" />
        <NewArrivals />
        <Services />
    </div>
  )
}

export default Carter