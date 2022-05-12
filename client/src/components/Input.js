import React from "react";

const RegisterInput = ({
  onChange,
  name,
  value,
  type,
  placeholder,
  size,
  ...rest
}) => {
  return (
    <div className={`form-group col-md-${size?size:'12'}`}>
      <label className="control-label" htmlFor={name}>
        {placeholder}
        <span className="text-primary">*</span>:
      </label>
      <input
        onChange={onChange}
        type={type}
        className="form-control"
        name={name}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default RegisterInput;
