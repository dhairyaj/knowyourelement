import React from 'react'
import PeriodicTableData from '../config/PeriodicTableJSON.json'
import PeriodicTableElement from './PeriodicTableElement'

const PeriodicTable = () => {
    return (
        <div className='flex flex-col justify-center h-[100vh] w-fit mx-auto'>
            <div className='grid gap-1 grid-cols-18 grid-rows-10'>
                {PeriodicTableData.elements.map((element) => (
                    <PeriodicTableElement key={element.name} name={element.name} row={element.ypos} col={element.xpos} symbol={element.symbol} category={element.category} atomicNumber={element.number} />
                ))}
            </div>
        </div>
    )
}

export default PeriodicTable
