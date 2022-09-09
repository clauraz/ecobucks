import React from 'react'

const Input = ({ ...props }) => {
  return (
    <label>
      <input
        className="rounded text-[18px] text-[#50d71e] p-[8px] mb-[40px] w-[448px] h-[57px] text-black"
        {...props}
      />
    </label>
  )
}

export default Input
