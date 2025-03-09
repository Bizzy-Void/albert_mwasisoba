import { useRouter } from "next/router"
import Link from "next/link"

function NavMenuItem({ title, path }) {
    const router = useRouter()
    return (
        <Link href={path}>
            <div className="duration-170 pt-3 cursor-pointer">
                <div
                    className={
                        "/" + router.pathname.split("/")[1] === path
                            ? " text-white"
                            : " text-gray-500"
                    }
                >
                    {title}
                </div>
                <div
                    className={`text-center leading-0 font-bold ${
                        "/" + router.pathname.split("/")[1] === path
                            ? " visible text-white "
                            : " invisible text-gray-500 "
                    } text-2xl`}
                >
                    .
                </div>
            </div>
        </Link>
    )
}

export default NavMenuItem
