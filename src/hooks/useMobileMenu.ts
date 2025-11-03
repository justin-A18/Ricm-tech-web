import { useEffect, useState } from "react";

export const useNavbarMobile = () => {
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const onOpenMobileMenu = () => {
		setIsOpenMobileMenu(true);
	};

	const onCloseMobileMenu = () => {
		setIsOpenMobileMenu(false);
	};

	useEffect(() => {
		if (isOpenMobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpenMobileMenu]);

	return {
		isOpenMobileMenu,
		onOpenMobileMenu,
		onCloseMobileMenu,
	};
};