import React from 'react'
  
type Props = {
  title?: string;
  description?: string;
}
const SectionHeading = ({title,description}:Props) => {
  return (
    <div className='w-[80%] mx-auto mb-12'>
        <h2 className='text-3xl font-bold  mb-6'>{title}</h2>
        <p className=' text-gray-600  mb-12'>
            {description}
        </p>
    </div>
  )
}

export default SectionHeading