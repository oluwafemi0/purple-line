import React from 'react'
import Sidebar from '../Sidebar'
import Card from '../Card/Card'
import System from '../System/System'
import Chart from '../Chart'
import {sysObjOne,sysObjTwo,sysObjThree} from '../System/Systemdata'
import {cardObjOne,cardObjTwo,cardObjThree} from '../Card/Carddata'

const Dash = () => {
  return (
    <>
    <div className=' bg-slate-800 h-screen'>
      <div class="flex  h-full ">
        <div class="flex-none w-[400px] bg-slate-900">
            <Sidebar />
        </div>
        <div className='h-full w-full '>
        <div class="flex-auto w-full  bg-white">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card {...cardObjOne}/>
        <Card {...cardObjTwo}/>
        <Card {...cardObjThree}/>
          </div>     
          
        </div>
        <div class="flex-auto w-full  bg-white">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <System {...sysObjOne}/>
                  <System {...sysObjTwo}/>
                  <System {...sysObjThree}/>
          </div>
        </div>
        <div class="flex-auto w-full  bg-white">
        <div class="grid h-[406px] sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Chart />
        </div>

        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dash