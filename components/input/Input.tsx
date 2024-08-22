import { Path, useForm } from 'react-hook-form';

interface InputProps {
	id: string;
	className?: string;
}

const Input = ({ id, className, ...props }: InputProps) => {
	return <input id={id} className={className} {...props} />;
};

export default Input;
