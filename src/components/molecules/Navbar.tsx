import { NAV_LINKS } from '../../constants/navigation';
import { MenuIcon } from '../atoms/icons/MenuIcon';
import { ArrowUpLeftIcon } from '../atoms/icons/ArrowUpLeftIcon';
import { LogoIcon } from '../atoms/icons/MenuIcon copy';

export const Navbar = () => {
	return (
		<header
			className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4'
			id='inicio'>
			<nav className='w-full flex justify-between items-center text-custom-blue-draker h-12 font-semibold'>
				<div className='flex items-center gap-3'>
					<LogoIcon />
					<span className='font-[600] text-2xl'>RICM</span>
				</div>

				<ul className='justify-center hidden md:flex items-center'>
					{NAV_LINKS.map((link) => (
						<li
							key={link.name}
							className='px-4 py-1 text-base'>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
					<li className='px-4 py-1 text-base md:hidden'>
						<a href='#contacto'>Contáctanos</a>
					</li>
				</ul>

				<a
					href='#contacto'
					className='px-4 py-3 font-semibold bg-primary text-custom-black rounded-lg hidden md:inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40'>
					¡Conversemos!
					<ArrowUpLeftIcon
						className='size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1'
						fill='#18131a'
					/>
				</a>

				<button className='md:hidden'>
					<MenuIcon
						className='size-8'
						fill='#FFF'
					/>
				</button>
			</nav>
		</header>
	);
};
