import { NAV_LINKS } from '../../constants/navigation';
import { MenuIcon } from '../atoms/icons/MenuIcon';
import { ArrowUpLeftIcon } from '../atoms/icons/ArrowUpLeftIcon';
import { LogoIcon } from '../atoms/icons/LogoIcon';
import { useNavbarMobile } from '../../hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
	const { isOpenMobileMenu, onCloseMobileMenu, onOpenMobileMenu } =
		useNavbarMobile();

	return (
		<header
			className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4'
			id='inicio'>
			<nav className='w-full flex justify-between items-center text-custom-blue-draker h-12 font-medium'>
				<a
					className='flex items-center gap-3'
					href='#inicio'>
					<LogoIcon />
					<span className='font-[600] text-2xl'>RICM</span>
				</a>

				<ul className='justify-center hidden md:flex items-center'>
					{NAV_LINKS.map((link) => (
						<li
							key={link.name}
							className='px-4 py-1'>
							<a
								href={link.href}
								className='text-base text-neutral-300 w-fit relative before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-primary before:-bottom-1 before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:duration-500'>
								{link.name}
							</a>
						</li>
					))}
					<li className='px-4 py-1 text-base md:hidden'>
						<a href='#contacto'>Contáctanos</a>
					</li>
				</ul>

				<a
					href='https://calendly.com/gestionclientes-ricmtech'
					className='px-4 py-3 font-semibold bg-primary text-custom-black rounded-lg hidden md:inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 group'>
					¡Conversemos!
					<ArrowUpLeftIcon
						className='size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1'
						fill='#18131a'
					/>
				</a>

				<button
					className='md:hidden cursor-pointer'
					aria-label='open mobile menu'
					onClick={onOpenMobileMenu}>
					<MenuIcon
						className='size-8'
						fill='#FFF'
					/>
				</button>

				<MobileMenu
					isOpenMobileMenu={isOpenMobileMenu}
					onCloseMobileMenu={onCloseMobileMenu}
				/>
			</nav>
		</header>
	);
};
