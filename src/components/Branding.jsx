import React, { useState } from 'react'
import Button from './Button'
import bluetooth from '../assets/Frame 694.png'

function Branding() {
  return (
    <div className='flex bg-black justify-between p-12 pb-0'>
        <div className='text-white flex flex-col gap-8'>
            <p className='text-green-500'>Categories</p>
            <h1 className='text-4xl font-semibold'>Enhance Your <br />Music Exprience </h1>
            <Clock />
            <Button name="Buy Now!" isRed={false} />
        </div>
        <div>
            <img src={bluetooth} alt="" className='w-3/5 ' />
        </div>
    </div>
  )
}

export default Branding

function Clock(){
    const[time, setTime]= useState(new Date())

    useState(()=>{
        const updateTime= setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>clearInterval(updateTime)
    },[])

    function dispayWell (number){
       return number <10 ? `0${number}`: number
    }
    const display =()=>{
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const day = time.getDay()

        return{
            hours: (dispayWell(hours % 12 ||12)),
            day:(dispayWell(day)),
            minutes:(dispayWell(minutes)),
            seconds:(dispayWell(seconds))

        }
    }
    const {hours,day,minutes,seconds}= display()

    return(
        <div className='flex gap-6  text-black'>
            <p className='flex flex-col bg-white rounded-[100%] text-[10px] p-3 text-center'><span className='font-bold '>{hours} </span> <span>Hours</span> </p>
            <p className='flex flex-col bg-white rounded-[100%] text-[10px] py-3 px-5 text-center  '><span className='font-bold'>{day} </span> <span>Days</span></p>
            <p className='flex flex-col bg-white rounded-[100%] text-[10px] p-3 text-center'><span className='font-bold'>{minutes}</span> <span>Minutes</span></p>
            <p className='flex flex-col bg-white rounded-[100%] text-[10px] p-3 text-center'><span className='font-bold'>{seconds}</span><span>Seconds</span></p>
        </div>
    )
}