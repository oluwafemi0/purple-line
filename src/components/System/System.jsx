import React from 'react'

const System = ({description, capacity,wattage,}) => {
  return (
    <>
          
<div class="max-w-[85rem] px-4 py-5 sm:px-6 lg: mx-auto">
  
    
    <div class="flex w-[440px] flex-col gap-y-3 lg:gap-y-4 p-4 md:p-5 bg-white border shadow-sm  dark:bg-white shadow-md">
      <div class="inline-flex justify-center items-center">
        <span class="text-lg font-semibold  text-gray-600 dark:text-gray-800">{description}</span>
      </div>

      <div class="text-center">
        <h3 class="text-3xl sm:text-4xl lg:text-8xl font-semibold text-gray-800 dark:text-gray-800">
          {capacity}
          <span class="text-6xl text-purple-800">%</span>
        </h3>
        

      </div>

      <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
        
        <dd class="text-left pl-3">
          <span class="text-lg font-semibold text-gray-800 dark:white">{wattage}<span class="text-sm font-semibold text-gray-800 dark:white">watts</span></span>
        </dd>
      </dl>
    </div>
  
</div>
    </>
  )
}

export default System