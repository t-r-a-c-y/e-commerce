import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const timeUpdate = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>clearInterval(timeUpdate)
    },[])

    const displayTime = ()=>{
        const day =time.getDay()
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return {
            day:settingZero(day),
            hours :settingZero( hours % 12 || 12),
            minutes : settingZero(minutes),
            seconds:  settingZero(seconds),
        }
    }
    const {day,hours,minutes,seconds} = displayTime();

    function settingZero(number){
        return number <10 ? `0${number}`:number
    }

  return (
    <div>
        <Stater name = "Today's" />
        <div className='flex justify-between '>
            <div className='flex gap-24 justify-between'>
            <DivHeader name="Flash Sales" />
            <div className='flex gap-5 mb-5 '>
                <p className='flex flex-col'><span>Days</span> <span  className='font-[semi-bold] text-4xl'>{day} <span  className='font-[semi-bold] text-4xl text-red-500'  > :</span> </span> </p>
                <p className='flex flex-col'> <span>Hours</span> <span  className='font-[semi-bold] text-4xl'>{hours} <span  className='font-[semi-bold] text-4xl text-red-500'  > :</span> </span></p>
                <p className='flex flex-col'><span>Minutes</span> <span  className='font-[semi-bold] text-4xl'>{minutes} <span  className='font-[semi-bold] text-4xl text-red-500'  > :</span> </span> </p>
                <p className='flex flex-col'><span>Seconds</span> <span  className='font-[semi-bold] text-4xl'>{seconds} </span> </p>
            </div>
            </div>
           <Arrow />
        </div>
    </div>
  )
}

export default Clock

export function Stater(props){
    return(
        <div className='text-red-500 border-l-[17px] border-red-500 rounded-[3px] px-5 py-1 mt-16'>
            <p className='font-bold' >{props.name} </p>
        </div>
    )
}

export function DivHeader (props){
    return(<h1 className='font-[semi-bold] text-4xl my-5'>
        {props.name}
    </h1>)
}
export function Arrow(){

    return( <div className='mt-9 flex gap-5 '>
        <i class="fa-solid fa-arrow-left border-3  " style={{color:' #000000;'}}></i>
        <i class="fa-solid fa-arrow-right" style={{color:' #000000;'}}></i>
        </div>)
}