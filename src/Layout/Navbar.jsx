import { useState } from "react";
import { Buttons } from "@/components/shared/Buttons";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import resume from '../assets/Safkat_Sharif_Sadli_Resume.docx.pdf'

const MenuItem = ({ label, href, onClick }) => (
    <li>
        <a href={href} onClick={onClick} className="text-lg text-white hover:underline">
            {label}
        </a>
    </li>
);

const Sidebar = ({ isOpen, onClose }) => (
    <div
        className={`fixed top-0 right-0 h-screen sm:w-1/2 w-3/4 bg-gray-800 p-5 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col justify-center`}
    >
        <button onClick={onClose} className="text-3xl cursor-pointer absolute top-10 right-10">
            <IoMdCloseCircle />
        </button>
        <ul className="flex flex-col space-y-5 list-none">
            {[
                { label: "Home", href: "#" },
                { label: "Skills", href: "#skills" },
                { label: "Works", href: "#works" },
                { label: "About", href: "#about" }
            ].map((item) => (
                <MenuItem key={item.label} label={item.label} href={item.href} onClick={onClose} />
            ))}
        </ul>
        <div className="mt-5 w-full flex flex-col gap-2.5">
            <a onClick={onClose} className="w-full" href="#contact">
                <Buttons className="bg-transparent w-full text-gray-300 border-gray-500 border hover:bg-gray-700 hover:text-white transition duration-300" btnText="Contact" />
            </a>
            <a onClick={onClose} className="w-full" href={resume} download='Safkat.frontend.pdf'>
                <Buttons className="bg-gray-700 w-full text-white hover:bg-blue-700 transition duration-300" btnText="Resume" />
            </a>
        </div>
    </div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="fixed py-3 inset-x-0 z-20 text-neutral-400 backdrop-blur-3xl">
            <MaxWidthContainer>
                <nav className="flex justify-between items-center">
                    <h1 className="sm:text-4xl text-3xl font-semibold">safkat.dev</h1>

                    <div className="hidden lg:flex gap-x-7 list-none items-center">
                        {[
                            { label: "Home", href: "#" },
                            { label: "Skills", href: "#skills" },
                            { label: "Works", href: "#works" },
                            { label: "About", href: "#about" }
                        ].map((item) => (
                            <MenuItem key={item.label} label={item.label} href={item.href} onClick={closeMenu} />
                        ))}
                    </div>

                    <div className="hidden lg:flex space-x-2">
                        <a href="#contact">
                            <Buttons className="bg-transparent text-gray-300 border-gray-500 border hover:bg-gray-700 hover:text-white transition duration-300" btnText="Contact" />
                        </a>
                        <a href={resume} download='Safkat.frontend.pdf'>
                            <Buttons className="bg-gray-700 text-white hover:bg-blue-700 transition duration-300" btnText="Resume" />
                        </a>
                    </div>

                    <button onClick={toggleMenu} className="lg:hidden text-2xl cursor-pointer">
                        <CiMenuFries />
                    </button>
                </nav>
            </MaxWidthContainer>

            <Sidebar isOpen={isOpen} onClose={closeMenu} />
        </div>
    );
};

export default Navbar;
