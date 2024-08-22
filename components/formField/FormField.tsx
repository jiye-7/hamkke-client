import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import Input from '../input/Input';
import Label from '../label/Label';

interface IFormFiledProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string; // input(id), label(htmlFor)
	label: string;
	labelClassName?: string;
	inputClassName?: string;
}

const FormFiled = ({
	id,
	label,
	labelClassName,
	inputClassName,
	...inputProps
}: IFormFiledProps) => {
	const defaultLabelClassName =
		'block text-sm font-semibold leading-6 text-gray-900';
	const defaultInputClassName =
		'block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
	return (
		<div>
			<Label
				id={id}
				label={label}
				className={classNames(labelClassName || defaultLabelClassName)}
			/>
			<div className="mt-2">
				<Input
					id={id}
					className={classNames(inputClassName || defaultInputClassName)}
					{...inputProps}
				/>
			</div>
		</div>
	);
};

export default FormFiled;
