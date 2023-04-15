import Link from 'next/link'
import NavMenuItem from './common/navMenuItem'

import data from './utils'

function Layout({ children }) {
  return (
    <div className='flex relative flex-col h-screen'>
        <nav className='w-full pt-4 pb-2 px-4 md:px-10 lg:px-32 fixed top-0 left-0 z-50 bg-white flex justify-between'>
          <Link href={'/'}>
            <span className='text-4xl font-iskry home-link'>
              <span className='inline md:hidden'>a</span>
              <span className='hidden md:inline lg:hidden'>albert</span>
              <span className='hidden md:hidden lg:inline'>albertmwasisoba</span>
              <span className='text-gray-500'>.me</span>
            </span>
          </Link>
          <ul className='text-xs uppercase gap-x-4 flex justify-between'>
            {data.navRoutes.map((route, index) => (
              <li key={index}>
                <NavMenuItem title={route.title} path={route.path} />
              </li>
            ))}
          </ul>
        </nav>
        <main className='w-full flex flex-grow'>
          <div className='w-full h-full py-20'>
            {children}
          </div>
        </main>
    </div>
  )
}

export default Layout