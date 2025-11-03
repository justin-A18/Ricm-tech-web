import {
	NAV_CONTACT_LINKS,
	NAV_LEGAL_LINKS,
	NAV_LINKS,
} from '../../constants/navigation';
import { CloseIcon } from '../atoms/icons/CloseIcon';
import { LogoIcon } from '../atoms/icons/LogoIcon';

interface Props {
	isOpenMobileMenu: boolean;
	onCloseMobileMenu: () => void;
}

export const MobileMenu = ({ isOpenMobileMenu, onCloseMobileMenu }: Props) => {
	return (
		<>
			<div
				className={`fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
					isOpenMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={onCloseMobileMenu}></div>

			<div
				id='mobile-menu'
				role='menu'
				aria-label='Main mobile menu'
				className={`fixed top-0 right-0 z-[9999] h-screen p-4 w-80 sm:w-96 bg-custom-black text-zinc-100 flex flex-col shadow-xl transition-transform duration-500 ${
					isOpenMobileMenu ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<div className='flex items-center justify-between mb-8'>
					<div className='flex items-center gap-3'>
						<LogoIcon className='size-7 rounded-lg fill-white' />
						<span className='font-bold text-xl'>RICM</span>
					</div>
					<button
						className='self-end mb-4 p-2 rounded hover:bg-primary/30 transition-colors cursor-pointer'
						aria-label='close mobile menu'
						onClick={onCloseMobileMenu}>
						<CloseIcon className='size-6' />
					</button>
				</div>

				<ul className='flex flex-col gap-2'>
					{NAV_LINKS.map((item, index) => (
						<li
							className='py-2 px-2'
							key={index}
							onClick={onCloseMobileMenu}>
							<a
								href={item.href}
								className='text-neutral-300 w-fit relative before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-primary before:-bottom-1 before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:duration-500'>
								{item.name}
							</a>
						</li>
					))}
				</ul>

				<hr className='my-4 border-secondary' />

				<ul className='flex flex-col gap-2'>
					{NAV_LEGAL_LINKS.map((item, index) => (
						<li
							className='py-2 px-2'
							key={index}
							onClick={onCloseMobileMenu}>
							<a
								href={item.href}
								className='text-neutral-300 w-fit relative before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-primary before:-bottom-1 before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:duration-500'>
								{item.name}
							</a>
						</li>
					))}
				</ul>

				<hr className='my-4 border-secondary' />

				<ul className='flex flex-col gap-2'>
					{NAV_CONTACT_LINKS.map((item, index) => (
						<li
							className='py-2 px-2'
							key={index}
							onClick={onCloseMobileMenu}>
							<a
								href={item.href}
								className='text-neutral-300 w-fit relative before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-primary before:-bottom-1 before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:duration-500'>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
