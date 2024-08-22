import Link from 'next/link';
import Image from 'next/image';

import HamkkeLogo from '@/public/assets/hamkke_logo.png';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image
				src={HamkkeLogo}
				alt="hamkke logo"
				className="mx-auto w-auto h-7"
			/>
		</Link>
	);
};

export default Logo;
