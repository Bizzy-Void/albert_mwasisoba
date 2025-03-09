"use client"

import AlbertImage from "./albertImage"
import TextPressure from "../../common/textpressure"

function Homepage() {
    return (
        <>
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="px-4 md:px-10 lg:px-32 relative w-full h-full flex flex-col items-center justify-center md:justify-between">
                    <TextPressure
                        text="Hello!"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={false}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                    <div className={"text-white text-center absolute bottom-5"}>
                        <span
                            className={
                                "text-xl uppercase font-semibold tracking-wide"
                            }
                        >
                            I&apos;m Albert
                        </span>
                        <br />{" "}
                        <span className={"text-gray-500"}>
                            A Software Developer
                        </span>
                    </div>
                    <div className="absolute bottom-20 w-72 h-72 bg-gray-100 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                    <div className={"absolute bottom-20"}>
                        <AlbertImage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
