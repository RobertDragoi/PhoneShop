import React from "react";

const RegisterInput = ({
  onChange,
  name,
  value,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <div className="form-group col-md-12">
      <label className="control-label" htmlFor={name}>
      {placeholder}<span className="text-primary">*</span>:
      </label>
      <div>
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
    </div>
  );
};

export default RegisterInput;
