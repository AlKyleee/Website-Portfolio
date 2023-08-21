import React from 'react'

const ResumeCard = ({ duration, positionName, companyDegree, location, children }) => {
    return (
        <div id='resumeCard' className='flex px-14 py-28 my-7 bg-white w-full justify-between shadow-[0_10px_16px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]'>
            <div className="flex flex-col w-1/3">
                <p className='text-xl font-medium text-tertiary'>{duration}</p>
                <p className='text-lg font-semibold text-tertiary'>{positionName}</p>
                <p className='text-md font-semibold py-1 text-tertiary'>{companyDegree}</p>
                <p className='text-md font-semibold py-1 text-tertiary'>{location}</p>
            </div>
            <div className="flex w-1/2">
                {children}
            </div>
        </div>
    )
}

export default ResumeCard