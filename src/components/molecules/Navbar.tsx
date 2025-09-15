import Menu from '../../assets/hamburger.svg';
import Logo from '../../assets/logo.svg';
import X from '../../assets/close.svg';
import { NAV_LINKS } from '../../constants/navigation';
import { useEffect, useState } from 'react';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (!isOpen) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<header
			className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4'
			id='inicio'>
			<nav className='w-full flex justify-between items-center text-custom-blue-draker h-12 font-semibold'>
				<div className='flex items-center gap-3'>
					<img
						src={Logo.src}
						alt='Logo'
						className='size-10 rounded-lg'
					/>
					<span className='font-bold text-xl'>RICM TECH</span>
				</div>

				<ul
					className={`fixed w-full md:w-fit h-full top-0 left-0 z-50 bg-primary flex-col md:flex-row justify-center md:relative flex items-center gap-8 md:gap-0 transition-all duration-300 md:opacity-100 md:visible ${
						isOpen ? 'opacity-100 visible z-10' : 'opacity-0 invisible'
					}`}>
					<li
						className='absolute top-6 right-5 cursor-pointer md:hidden'
						onClick={toggleMenu}>
						<img
							src={X.src}
							alt='Cerrar'
							className='size-6'
						/>
					</li>
					{NAV_LINKS.map((link) => (
						<li
							key={link.name}
							onClick={toggleMenu}
							className='px-4 py-1 text-3xl md:text-base'>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
					<li className='px-4 py-1 text-3xl md:text-base md:hidden'>
						<a href='#contacto'>Contáctanos</a>
					</li>
				</ul>

				<a
					href='#contacto'
					className='px-4 py-3 bg-custom-black text-white rounded-xl hidden md:block'>
					Contáctanos
				</a>

				<button
					className='md:hidden'
					onClick={toggleMenu}>
					<img
						src={Menu.src}
						alt='Menu'
					/>
				</button>
			</nav>
		</header>
	);
};
