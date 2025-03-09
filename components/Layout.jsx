import Footer from "./section/footer"

import data from "./utils"

import Navbar from "./ui/navbar"

function Layout({ children }) {
    return (
        <div className="flex relative flex-col h-dvh bg-bg_color">
            <Navbar />
            <main className="w-full flex flex-grow font-neue">
                <div className="bg-bg_color w-full h-full py-20">
                    <div className="w-full h-full relative overflow-hidden">
                        {children}
                    </div>
                </div>
            </main>
            <Footer data={data.mediaData} />
        </div>
    )
}

export default Layout
