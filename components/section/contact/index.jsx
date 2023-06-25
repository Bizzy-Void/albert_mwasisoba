import { useState, useEffect } from 'react'

import Input from "@/components/common/input";
import TextArea from "@/components/common/textarea";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

import data from "@/components/utils";

import { PopupButton } from "react-calendly";

function ContactPage() {
    const [showWidget, setShowWidget] = useState(false);

    useEffect(() => {
        setTimeout(function () {
          setShowWidget(true);
        }, 300);
    }, []);
  return (
    <>
        <div 
            id="contact-bizzy" 
            className="bg-bg_color flex px-4 md:px-10 lg:px-32 items-center h-full justify-start flex-wrap"
        >
            <div className='w-full md:w-1/2'>
                <div className='flex items-center justify-center h-full'>
                    <div>
                        <h2 className='font-bold w-full pt-8 text-4xl text-white text-left'>{"Let's talk"}</h2>
                        <p className='text-xl py-4 text-gray-500 pt-10 pb-5 md:pr-10'>{"Get in touch, let us discuss your project and get the job done!"}</p>
                        {showWidget && (
                            <PopupButton
                                url="https://calendly.com/albertmwasisoba/lets-talk"
                                rootElement={document.getElementById("contact-bizzy")}
                                text="Schedule an appointment"
                                className="my-8 bg-gray-600 py-3 px-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-700"
                            />
                        )}
                        <div className="flex justify-start gap-4 mb-10">
                            {data.mediaData.medias.map((media, index) => (
                                <a
                                target={"_blank"}
                                rel="noreferrer"
                                key={index}
                                href={media.link}
                                className="hover:underline text-white"
                                >
                                {media.title}
                                </a>
                            ))}

                            <a
                                target={"_blank"}
                                rel="noreferrer"
                                href={"tel:+255766073577"}
                                className="hover:underline text-white"
                            >
                                Phone
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <div className='bg-description_bg rounded-2xl p-10'>
                    <form>
                    <input
                        placeholder='Your name'
                        className='w-full py-2 bg-transparent border-x-0 border-t-0  px-4 border-2 my-2 outline-none text-gray-500 focus:text-white border-gray-400 focus:border-white'
                    />
                    <input
                        placeholder='Your email address'
                        className='w-full py-2 bg-transparent border-x-0 border-t-0  px-4 border-2 my-2 outline-none text-gray-500 focus:text-white border-gray-400 focus:border-white'
                    />
                    <input
                        placeholder='Your phone number'
                        className='w-full py-2 bg-transparent border-x-0 border-t-0  px-4 border-2 my-2 outline-none text-gray-500 focus:text-white border-gray-400 focus:border-white'
                    />
                    <input
                        placeholder='Your budget'
                        className='w-full py-2 bg-transparent border-x-0 border-t-0  px-4 border-2 my-2 outline-none text-gray-500 focus:text-white border-gray-400 focus:border-white'
                    />
                    <textarea
                        placeholder='Email address'
                        className='w-full py-2 bg-transparent border-x-0 border-t-0  px-4 border-2 my-2 outline-none text-gray-500 focus:text-white border-gray-400 focus:border-white'
                        rows={4}
                    ></textarea>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage