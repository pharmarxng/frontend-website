import { ReactNode } from "react";

const PageWrapper = ({children} : {children:ReactNode}):JSX.Element => {
    return (
        <main className="py-4 bg-[#d9e0e7] overflow-x-hidden w-full h-screen">
            {children}
        </main>
    )
};

export default PageWrapper;