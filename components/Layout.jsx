import Link from 'next/link'
import NavMenuItem from './common/navMenuItem'
import Footer from './section/footer'

import data from './utils'

// custom styles

function Layout({ children }) {
  return (
    <div className='flex relative flex-col h-screen bg-bg_color'>
        <nav className='w-full pt-4 pb-2 px-4 md:px-10 lg:px-32 fixed top-0 left-0 z-50 bg-black bg-opacity-5 backdrop-filter backdrop-blur-xl p-4 flex justify-between select-none pointer-events-auto'>
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
        <main className='w-full flex flex-grow font-neue'>
          <div className='bg-bg_color w-full h-full py-20'>
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute bottom-0 md:top-0 right-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 md:top-0 right-20 w-44 h-44 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-12 md:bottom-32 right-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              {children}
            </div>
          </div>
        </main>
        <Footer data={data.mediaData}/>
    </div>
  )
}

export default Layout