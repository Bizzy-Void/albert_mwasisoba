import * as BsIcons from "react-icons/bs"
import Link from "next/link"

export default function Button({ title, link, a }) {
    if (a === true)
        return (
            <a target={"_blank"} rel={"norefferer"} href={link}>
                <button className="group bg-gray-700 my-2 py-3 px-4 rounded-2xl text-bold duration-300">
                    <div className="flex text-white justify-start">
                        <div className="underline-offset-1 duration-300">
                            {title}
                        </div>
                        <BsIcons.BsArrowRight className="text-2xl ml-2 group-hover:ml-6 duration-200 font-bold" />
                    </div>
                </button>
            </a>
        )

    return (
        <Link href={link}>
            <button className="group bg-gray-700 text-bold duration-300 my-2 mt-20">
                <div className="flex justify-start">
                    <div className="group-hover:underline underline-offset-1 duration-300">
                        {title}
                    </div>
                    <BsIcons.BsArrowRight className="text-2xl ml-2 group-hover:ml-6 duration-200 font-bold" />
                </div>
            </button>
        </Link>
    )
}
