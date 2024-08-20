import { HTMLAttributes } from "react";

interface IHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  text: string;
}

const Header = ({ className, text, ...props }: IHeaderProps) => {
  return (
    <h1 className={className} {...props}>
      {text}
    </h1>
  );
};

export default Header;
