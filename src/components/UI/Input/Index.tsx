import React from "react";

type propsType = {
  title?: string;
  name: any;
  value?: any;
  onChange?: any;
  type: any;
  placeholder?: any;
  required?: any;
  defaultValue?: any;
  disabled?: boolean;
  isChecked?: boolean;
};

const Input = (props: propsType) => {
  const {
    title,
    name,
    value,
    onChange,
    type,
    placeholder,
    required,
    defaultValue,
    disabled,
    isChecked,
  } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {title}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        className={`${
          disabled ? "cursor-not-allowed" : ""
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        onChange={onChange}
        checked={isChecked}
      />
    </>
  );
};

export default Input;
