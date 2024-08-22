import Link from 'next/link';
import { ReactNode } from 'react';

// TODO: Navigation, Footer 등
const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-slate-50 min-h-screen">
			<nav className="flex justify-end mt-6">
				<Link href="/users/login">
					<span className="font-bold text-gray-700 mr-5">Login</span>
				</Link>
				<Link href="/users/signup">
					<span className="font-bold text-gray-700 mr-5">SignUp</span>
				</Link>
			</nav>
			{children}
			<span className="bg-red-500">Test Layouts</span>
		</div>
	);
};

export default Layout;
