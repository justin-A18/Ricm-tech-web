import type { SVGProps } from 'react';

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='25'
			fill='none'
			viewBox='0 0 25 25'
			{...props}>
			<g clipPath='url(#clip0_440_46)'>
				<mask
					id='mask0_440_46'
					width='25'
					height='25'
					x='0'
					y='0'
					maskUnits='userSpaceOnUse'
					style={{ maskType: 'luminance' }}>
					<path
						fill='#fff'
						d='M25 0H0v25h25z'></path>
				</mask>
				<g mask='url(#mask0_440_46)'>
					<path
						fill='url(#paint0_linear_440_46)'
						d='M15.893 25c-3.394 0-3.394-4.072-6.787-4.072-3.905 0-9.106-1.13-9.106-5.036 0-3.393 4.071-3.393 4.071-6.786C4.071 5.202 5.201 0 9.108 0 12.5 0 12.5 4.072 15.894 4.072c3.904 0 9.106 1.13 9.106 5.036 0 3.393-4.072 3.393-4.072 6.787-.002 3.91-1.13 9.105-5.036 9.105'></path>
				</g>
			</g>
			<defs>
				<linearGradient
					id='paint0_linear_440_46'
					x1='12.5'
					x2='12.5'
					y1='0'
					y2='25'
					gradientUnits='userSpaceOnUse'>
					<stop stopColor='#D69FEF'></stop>
					<stop
						offset='1'
						stopColor='#18131A'></stop>
				</linearGradient>
				<clipPath id='clip0_440_46'>
					<path
						fill='#fff'
						d='M0 0h25v25H0z'></path>
				</clipPath>
			</defs>
		</svg>
	);
};
