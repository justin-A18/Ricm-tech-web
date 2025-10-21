import type { SVGProps } from 'react';

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'>
			<path
				id='SVGRepo_iconCarrier'
				stroke={props.fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M4 6h16M4 12h16M4 18h16'></path>
		</svg>
	);
};
