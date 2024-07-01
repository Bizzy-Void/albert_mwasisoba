import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link href={'/'}>
                <span className='text-3xl font-iskry home-link text-white'>
                <span className='inline md:hidden'>a</span>
                <span className='hidden md:inline lg:hidden'>albert</span>
                <span className='hidden md:hidden lg:inline'>albertmwasisoba</span>
                <span className='text-gray-500'>.me</span>
                </span>
          </Link>
        </>
    );
}
 
export default Logo;