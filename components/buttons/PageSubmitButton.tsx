import React from 'react'

const PageSubmitButton = ({children}: {children: React.ReactNode}) => {
  return (
    <button className='w-full text-center px-5 py-2.5 bg-[#FFCE22] hover:bg-[#FFD84D] rounded-[4px] active:bg-[#FFCE22]'>{children}</button>
  )
}

export default PageSubmitButton