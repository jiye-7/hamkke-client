interface IHeaderProps {
  className?: string;
  text: string;
}

const Header = ({ className, text }: IHeaderProps) => {
  return <h1 className={className}>{text}</h1>;
};

export default Header;
