import { SubmitHandler, useForm, Resolver } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';

import Copyright from '@/components/copyright/Copyright';
import Header from '@/components/header/Header';
import Logo from '@/public/assets/hamkke_logo.png';

/**
 * 입력창
 *  - 이메일
 *  - 비밀번호
 *    !@#$%^&* 특수문자 중 1개 필수 사용,
 *    영어 대소문자 중 하나 사용,
 *    8자 이상
 */
/**
 * - handleSubmit: onSubmit을 호출하기 전에 입력의 유효성을 검사하는 메서드
 * - register: input 태그에 연결, register 함수를 호출하여 입력을 hook에 등록
 */

type FormValues = {
	email: string;
	password: string;
};

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// const emailWatch = watch('email'); // or watch()

	// 서버에 요청 보내기
	// 요청이 처리되는 동안 버튼 비활성화 - 사용자 피드백
	const onSubmit: SubmitHandler<FormValues> = async (data, errors) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(data);
			console.log(errors);
			throw new Error();
		} catch (error) {
			// 특정 filed만 줄 경우 'email'
			// 특정 filed가 아닌 모든 필드에 적용하고 싶을 땐 'root'
			setError('root', {
				// 서버에서 보내준 에러 응답값 활용하기
				// message: '존재하지 않는 이메일입니다.', // 특정 필드에 표기
				message: '로그인 실패! 다시 한번 로그인해주세요.',
			});
		}
	};

	return (
		<div className="flex flex-col min-h-full justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Link href="/">
					<Image src={Logo} alt="hamkke logo" className="mx-auto w-auto h-7" />
				</Link>
				<Header
					className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-800"
					text="Sign in to your account"
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
							Email
						</label>
						<input
							{...register('email', {
								required: '이메일을 입력해주세요.',
								// required: true를 주게되면 아래 errors.email을 했을 때 아무 문구도 출력되지 않음
								// regExp: '',
								validate: (value) => {
									if (!value.includes('@')) {
										return '이메일에는 @가 반드시 들어가야합니다.';
									}
									// 입력이 유효한 경우
									return true;
								},
							})}
							className="block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							id="email"
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
							Password
						</label>
						<input
							{...register('password', {
								required: '비밀번호를 입력해주세요.',
								minLength: {
									value: 8,
									message: '비밀번호는 8자이상 입력해주셔야합니다.',
								},
							})}
							className="block w-full rounded-md border-spacing-0 py-1.5 text-grey-900 px-1.5 shadow-lg ring-1 ring-inset ring-grey-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							id="password"
							type="password"
						/>
						{errors.password && (
							<p className="pt-2 text-xs text-red-500">
								{errors.password?.message}
							</p>
						)}
					</div>
					<div>
						{errors.root?.message && (
							<p className="pt-2 text-xs text-red-500 text-center">
								{errors.root?.message}
							</p>
						)}
					</div>
					<div className="flex justify-around  pt-6">
						<p className="text-sm text-gray-600">아직 회원이 아니신가요?</p>
						<Link
							href={'/users/signup'}
							className="text-sm font-bold text-blue-600 hover:text-blue-300"
						>
							회원가입
						</Link>
					</div>
					<div>
						<button
							type="submit"
							className={`flex w-full justify-center ${isSubmitting ? 'bg-slate-400' : 'bg-yellow-400'} rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-md ${!isSubmitting && 'hover:bg-yellow-300'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 my-16`}
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Loading' : 'Login'}
						</button>
					</div>
				</form>
				<Copyright />
			</div>
		</div>
	);
};

export default LoginPage;
