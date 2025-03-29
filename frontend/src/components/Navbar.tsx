import { useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Menu } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (!storedTheme) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            return true;
        }
        const isDark = storedTheme === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        return isDark;
    });

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
        localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 dark:bg-[#121212]/30 backdrop-blur-lg shadow-lg rounded-bl-lg rounded-br-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/djoebsejh/image/upload/v1742921246/vil4rm3ltbfvrqrgrmyt.png"
                            alt="CampusZ Logo"
                            className="h-8 w-9 transition-transform duration-300 hover:scale-110"
                        />
                        <Link
                            to="/"
                            className="text-2xl font-bold ml-3 transition-all duration-300 hover:opacity-90"
                        >
                            <span className="bg-gradient-to-r from-[#00B7DB] to-[#30E6EA] bg-clip-text text-transparent">
                                Campus
                            </span>
                            <span className="bg-gradient-to-r from-[#48FF5A] to-[#11C359] bg-clip-text text-transparent">
                                Z
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {["Home", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-800 dark:text-gray-200 text-lg font-medium transition-all duration-300 hover:text-[#4CE088] dark:hover:text-[#75B0F8]"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ConnectButton />
                        <Button
                            variant="outline"
                            className="text-sm font-medium ml-4"
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-blue-600" />}
                        </Button>
                        <Button className="px-4 bg-[#00B7DB] text-white hover:opacity-80 transition-all">
                            Login / Signup
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="bg-white/20 dark:bg-[#121212]/30 backdrop-blur-lg flex flex-col h-full justify-between p-6 z-[100]"
                            >
                                {/* Logo & Name */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://res.cloudinary.com/djoebsejh/image/upload/v1742921246/vil4rm3ltbfvrqrgrmyt.png"
                                        alt="CampusZ Logo"
                                        className="h-11 w-12 mb-2"
                                    />
                                </div>

                                {/* Menu Items */}
                                <div className="flex flex-col items-center space-y-6 mt-6">
                                    {["Home", "About", "Contact"].map((item) => (
                                        <Link
                                            key={item}
                                            to={`/${item.toLowerCase()}`}
                                            className="text-gray-800 dark:text-gray-200 hover:text-[#4CE088] dark:hover:text-[#75B0F8] transition-all duration-300 text-lg font-semibold"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>

                                {/* Theme Toggle & Login */}
                                <div className="flex flex-col items-center space-y-4 mt-auto pb-6 w-full">
                                    <Button
                                        variant="outline"
                                        className="w-full flex justify-center items-center"
                                        onClick={toggleTheme}
                                    >
                                        {isDarkMode ? (
                                            <SunIcon className="h-6 w-6 text-yellow-400" />
                                        ) : (
                                            <MoonIcon className="h-6 w-6 text-blue-600" />
                                        )}
                                    </Button>
                                    <Button className="w-full bg-gradient-to-r from-[#00B7DB] to-[#30E6EA] text-white hover:opacity-80 transition-all">
                                        Login / Signup
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
