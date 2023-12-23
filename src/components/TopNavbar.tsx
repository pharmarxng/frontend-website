import React from "react";
import { useMediaQuery } from "react-responsive";


const TopNavbar = ({ setIsSideNavOpen }: { setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {
    const isSmallDevice = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            {isSmallDevice && (
                <nav className="flex absolute md:relative bg-white h-20 w-full flex justify-between px-2 items-center">
                    <img src="/images/pharmarxlogo.png" alt='pharmarx' className="h-12 w-16" />
                    {/* replace with burger icon */}
                    <p className="text-[#3f6387]" onClick={() => setIsSideNavOpen((prev: boolean) => !prev)}>Toggle</p>
                </nav>
            )}
        </>
    )
};

export default TopNavbar;