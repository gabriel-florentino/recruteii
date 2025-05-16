import React from 'react';

export default function InputBase({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  ...props
}) {
  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium text-black dark:text-white">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 border border-black rounded-xl bg-white dark:bg-black
          focus:outline-none  focus:border-2 focus:border-black dark:border-white
          ${error ? 'border-red-500' : 'border-black dark:border-white'}
          dark:black dark:text-white
        `}
        {...props}
      />
      {error && <p className=" mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
