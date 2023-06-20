import React from 'react'
import Row from './Row/Row'
import {rowObjOne,rowObjTwo,rowObjThree} from './Row/Rowdata'

const Table = () => {
  return (
    <>
    <div class="-m-1.5 h-[415px]  mt-7 overflow-hidden">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-white">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase">unit</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase">Sold</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-white">
            <Row {...rowObjOne}/>
            <Row {...rowObjTwo}/>
            <Row {...rowObjThree}/>
          </tbody>
        </table>
      </div>
    </div>
  </div>

    </>
  )
}

export default Table