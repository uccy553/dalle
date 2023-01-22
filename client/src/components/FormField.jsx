import React from 'react'


const FormField = ({ labelName, name, type, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
  return (
    <section>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900 ">
            {labelName}
        </label>
        {isSupriseMe && (
          <button type='button' onClick={handleSupriseMe} className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
            Surprise me
          </button>
        )}
      </div>

      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3" />
    </section>
  )
}

export default FormField