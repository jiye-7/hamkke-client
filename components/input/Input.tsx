import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className: string;
  defaultValue?: string;
}

const CustomInput = ({
  type,
  className,
  defaultValue,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

export default CustomInput;
