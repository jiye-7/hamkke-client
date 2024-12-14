import { LabelHTMLAttributes } from "react";

interface ILableProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  id: string;
}

const Label = ({ label, id, ...props }: ILableProps) => {
  return (
    <label htmlFor={id} {...props}>
      {label}
    </label>
  );
};

export default Label;
