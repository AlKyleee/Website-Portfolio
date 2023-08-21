import React from 'react'

const HeaderTitle = ({ title }) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <span className='h-5 w-5 mt-1 bg-quaternary'></span>
            <p className='text-4xl font-semibold text-tertiary'>{title}</p>
        </div>
    )
}

export default HeaderTitle