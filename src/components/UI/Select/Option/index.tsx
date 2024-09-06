import React from "react";
type propsType = {
  value: any;
  children: React.ReactNode;
  seclected?: boolean;
};

const Option = (props: propsType) => {
  const { value, children, seclected } = props;
  return (
    <option value={value} selected={seclected}>
      {children}
    </option>
  );
};

export default Option;
