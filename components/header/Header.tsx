import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface IHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	text: string;
}

const Header = ({ className, text, ...props }: IHeaderProps) => {
	const defaultHeaderClass =
		'mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-800';

	return (
		<h1 className={classNames(className || defaultHeaderClass)} {...props}>
			{text}
		</h1>
	);
};

export default Header;
