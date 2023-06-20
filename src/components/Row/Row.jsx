import React from 'react'

const Row = ({description, price}) => {
  return (
    <>
    <tr class="hover:bg-gray-100 dark:hover:bg-purple-600">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white"><span class="text-white">Unit </span>{description}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-white"> <span class="text-white">₦ </span>{price}</td>
              
    </tr>
    </>
  )
}

export default Row