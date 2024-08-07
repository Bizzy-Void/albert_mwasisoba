import Link from 'next/link'
import NavMenuItem from './common/navMenuItem'
import Footer from './section/footer'

import data from './utils'

import Navbar from './ui/navbar'

import Confetti from './common/confetti'

// custom styles

function Layout({ children }) {
  const isBirthday = () => {
    const today = new Date();
    return today.getMonth() === 6 && today.getDate() === 11; // July is month 6 (0-indexed)
  };
  
  return (
    <div className='flex relative flex-col h-screen bg-bg_color'>
        <Navbar/>
        <main className='w-full flex flex-grow font-neue'>
          <div className='bg-bg_color w-full h-full py-20'>
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute bottom-0 md:top-0 right-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 md:top-0 right-20 w-44 h-44 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-12 md:bottom-32 right-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              {children}
              {isBirthday() && 
                <div className="confetti-container absolute top-0 left-0 right-0 bottom-0">
                  <Confetti />
                </div>
              }
            </div>
          </div>
        </main>
        <Footer data={data.mediaData}/>
    </div>
  )
}

export default Layout