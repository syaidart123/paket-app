import React from "react";

type propsType = {
  title: string;
  name: any;
  value?: any;
  onChange?: any;
  children?: React.ReactNode;
  required?: boolean;
};

const Select = (props: propsType) => {
  const { title, name, children, value, onChange, required } = props;
  return (
    <div className="my-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value="">...</option>
        {children}
      </select>
    </div>
  );
};

export default Select;
