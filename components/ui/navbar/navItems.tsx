import NavMenuItem from "@/components/common/navMenuItem"
import data from "@/components/utils"

const NavItems = () => {
    const navRoutes = data.navRoutes

    return (
        <>
            <ul className="font-neue text-xs uppercase gap-x-4 flex justify-between">
                {navRoutes.map((route, index) => (
                    <li key={index}>
                        <NavMenuItem title={route.title} path={route.path} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavItems
