/**
 * 입력창
 *  - 이메일
 *  - 비밀번호
 *  - 비밀번호 확인
 */

// zod 유효성 스키마 만들기

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

import Logo from '@/components/logo/Logo';
import Header from '@/components/header/Header';

// 스키마
const SignUpSchema = z
	.object({
		email: z.string().email({
			message: '유효한 이메일 주소를 입력해주세요.',
		}),
		password: z
			.string()
			.min(8, {
				message: '비밀번호는 최소 8자 이상이어야합니다.',
			})
			.regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/, {
				message:
					'비밀번호는 8자 이상, 특수문자 1개, 영어 대소문자 중 하나를 포함해야 합니다.',
			}),
		confirm: z
			.string()
			.min(8, {
				message: '비밀번호는 최소 8자 이상이어야합니다.',
			})
			.regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/, {
				message:
					'비밀번호는 8자 이상, 특수문자 1개, 영어 대소문자 중 하나를 포함해야 합니다.',
			}),
	})
	.refine((data) => data.password === data.confirm, {
		message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
		path: ['confirm'],
	});

// type 지정
type FormValues = z.infer<typeof SignUpSchema>;

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
			confirm: '',
		},
		resolver: zodResolver(SignUpSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col min-h-screen justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Logo />
				<Header
					className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-800"
					text="회원가입 정보 입력"
				/>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					{/** Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							이메일
						</label>
						<input
							{...register('email')}
							id="email"
							className="block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
						{errors.email && (
							<p className="pt-2 text-xs text-red-500">
								{errors.email?.message}
							</p>
						)}
					</div>
					{/** Password Field */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							비밀번호
						</label>
						<input
							{...register('password')}
							type="password"
							id="password"
							className="block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
						{errors.password && (
							<p className="pt-2 text-xs text-red-500">
								{errors.password?.message}
							</p>
						)}
					</div>
					{/** Password Confirm Field */}
					<div>
						<label
							htmlFor="confirm"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							비밀번호 확인
						</label>
						<input
							{...register('confirm')}
							type="password"
							id="confirm"
							className="block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
						{errors.confirm && (
							<p className="pt-2 text-xs text-red-500">
								{errors.confirm?.message}
							</p>
						)}
						{errors.root?.message && (
							<p className="pt-2 text-xs text-red-500">
								{errors.root?.message}
							</p>
						)}
					</div>
					<div className="flex justify-around items-center pt-6">
						<p className="text-sm text-gray-600">이미 회원이신가요?</p>
						<Link href="/users/login">
							<span className='className="text-sm font-bold text-blue-600 hover:text-blue-300"'>
								로그인
							</span>
						</Link>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center bg-yellow-400 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 my-16"
						>
							회원가입
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpPage;
