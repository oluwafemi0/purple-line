import React from 'react'

const Profile = () => {

  return (
    <>
    <div className="flex flex-col justify-center max-w-xs p-6   sm:px-12 dark:dark:bg-purple-800 dark:dark:text-gray-100">
        <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:dark:bg-gray-500 aspect-square" />
        <div className="space-y-4 text-center divide-y divide-white">
            <div className="my-2 space-y-1">
                <h2 className="text-xl text-white font-semibold sm:text-2xl">cr3ewr3c</h2>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
                
                
                <a rel="noopener noreferrer" href="" aria-label="Email" className="p-2 rounded-md dark:dark:text-white hover:dark:dark:text-violet-400">
                Sign out
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile