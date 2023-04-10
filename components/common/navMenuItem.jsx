import { useRouter } from 'next/router'
import Link from 'next/link'

function NavMenuItem({ title, path }) {
  const router = useRouter()
  return (
    <Link href={path}>
        <div className='duration-170 pt-3 cursor-pointer'>
            <div
                className={
                    "/" + router.pathname.split("/")[1] === path
                        ? " text-gray-900"
                        : " text-gray-500"
                }
            >
                {title}
            </div>
        </div>
    </Link>
  )
}

export default NavMenuItem