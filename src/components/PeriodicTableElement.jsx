import React from 'react'

const PeriodicTableElement = ({ name, row, col, symbol, category, atomicNumber }) => {
    return (
        <div style={{
            gridColumn: col,
            gridRow: row
        }} className="border-2 border-cyan-500 p-1">
            <p className='text-xs font-medium'>{atomicNumber}</p>
            <p className='font-bold text-2xl text-center'>{symbol}</p>
            <p className='text-[12px] text-center font-semibold'>{name}</p>
        </div>
    )
}

export default PeriodicTableElement
