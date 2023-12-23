import { useState } from "react";


const SideNavbar = ({ isSideNavOpen }: { isSideNavOpen: boolean }): JSX.Element => {
    const [show, setShow] = useState(false);

    let links = [
        ['Dashboard', '/'],
        ['Statistics', '/'],
        ['Orders', '/'],
        ['Products', '/'],
    ]


    return (
        <>
            {isSideNavOpen && (
                <aside className="flex-none h-screen overflow-hidden w-64 lg:w-1/5 absolute md:relative bg-white px-5 py-8">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <img src="/images/pharmarxlogo.png" alt='pharmarx' className="h-30 w-28 mx-auto mb-10" />
                            {
                                links.map((link: string[], id: number) =>
                                    <a href={`${link[1]}`}
                                        key={`link-${id}`}
                                        className="text-[#808191] text-base bg-[#d9e0e7] flex items-center my-3 rounded-2xl flex items-start p-3 no-underline hover:bg-[#3f6387] hover:text-[#fff] active:bg-[#3f6387]"
                                    >
                                        {link[0]}
                                    </a>
                                )
                            }
                        </div>

                        <div className="mb-20">
                            <span className="text-[#808191] bg-[#d9e0e7] flex flex-row justify-between my-3 rounded-2xl flex items-start p-3 no-underline hover:bg-[#3f6387] hover:text-[#fff] active:bg-[#3f6387]"
                            >
                                <p className="text-base flex justify-start items-center">Settings</p>
                                <div onClick={() => setShow(!show)}>!</div>
                            </span>
                            {show && (
                                <>
                                    <a href='/' className="text-[#808191] pl-4 flex my-3 text-sm">Notification</a>
                                    <a href='/' className="text-[#808191] pl-4 flex my-3 text-sm">Change Password</a>
                                </>
                            )}
                            <span>
                                <div className="text-[#cf3d3d]" onClick={() => { }}>Sign out</div>
                            </span>
                        </div>
                    </div>

                </aside>
            )}
        </>
    )
};

export default SideNavbar;