import type { SVGProps } from 'react';

export const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			{...props}>
			<path
				id='SVGRepo_iconCarrier'
				stroke={props.fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M7 17 17 7m0 0H8m9 0v9'></path>
		</svg>
	);
};
