import Logo from "./logo"
import NavItems from "./navItems"

const Navbar = () => {
    return (
        <>
            <nav className="w-full pt-4 pb-2 px-4 md:px-10 lg:px-32 fixed top-0 left-0 z-50 bg-black bg-opacity-5 backdrop-filter backdrop-blur-xl p-4 flex justify-between select-none pointer-events-auto">
                <Logo />
                <NavItems />
            </nav>
        </>
    )
}

export default Navbar
