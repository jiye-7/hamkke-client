import { LabelHTMLAttributes } from "react";

interface ILableProps extends LabelHTMLAttributes<HTMLLabelElement> {
  content: string;
  htmlFor: string;
}

const Label = ({ content, htmlFor, ...props }: ILableProps) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {content}
    </label>
  );
};

export default Label;
