import React from 'react'
import Profile from './Profile'
import Table from './Table'


const Sidebar = () => {
  return (
    <>
    <div class="relative bg-white dark:bg-purple-800">
    <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="h-screen w-72">
            
            <nav class="mt-10 px-6 ">
                <Profile />
                <Table />
                
            </nav>
            <div class="absolute bottom-0 mx-12 my-10">
                <a class="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8" href="/">
                    
                    <span class="mx-6 text-white font-medium">
                        Purple Line
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Sidebar