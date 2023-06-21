import Link from 'next/link'
import NavMenuItem from './common/navMenuItem'
import Footer from './section/footer'

import data from './utils'

// custom styles

function Layout({ children }) {
  return (
    <div className='flex relative flex-col h-screen bg-bg_color'>
        <nav className='w-full pt-4 pb-2 px-4 md:px-10 lg:px-32 fixed top-0 left-0 z-50 bg-black bg-opacity-5 backdrop-filter backdrop-blur-xl p-4 flex justify-between'>
          <Link href={'/'}>
            <span className='text-3xl font-iskry home-link text-white'>
              <span className='inline md:hidden'>a</span>
              <span className='hidden md:inline lg:hidden'>albert</span>
              <span className='hidden md:hidden lg:inline'>albertmwasisoba</span>
              <span className='text-gray-500'>.me</span>
            </span>
          </Link>
          <ul className='font-neue text-xs uppercase gap-x-4 flex justify-between'>
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
        <Footer data={data.mediaData}/>
    </div>
  )
}

export default Layout