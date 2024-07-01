import { useState } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import WorkPreview from './preview';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function WorkItem({work, setIframeUrl, toggleModal}) {
    const [showDetails, setShowDetails] =useState(false);

    const toggleShowDetails = () => {
        if (showDetails) setShowDetails(false);
        else setShowDetails(true);
    }
  return (
    <div>
        <div className={`rounded-2xl py-1 group/work bg-description_bg  w-full  duration-150`}>
            <div className='w-full m-1 h-auto flex justify-start'>
                <div className='font-bold text-lg text-white w-full text-left px-2'>
                    { work.title ? work.title : "" }
                </div>
            </div>

            <div className='px-2 pt-2'>
                <Swiper
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination, Autoplay]}
                    className='relative aspect-[3/2] w-full rounded-2xl overflow-hidden'
                >
                    {work.banners.length > 0 ? (
                    work.banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={banner.url}
                                alt={banner.alt}
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </SwiperSlide>
                    ))
                    ) : (
                    <SwiperSlide>
                        <div className="h-full w-full bg-gray-200 text-gray-400 flex justify-center items-center">
                        <HiOutlineBriefcase className="text-6xl" />
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className={`mx-2 my-2 ${showDetails && "pb-2"} pt-2 px-2 bg-transparent duration-150 group-hover/work:bg-description_bg rounded-xl`}>
                <div className='rounded-xl w-full  flex justify-between'>
                    <button
                        className={` rounded-t-lg group bg-gray-200 p-2 cursor-pointer ${
                            !showDetails && "rounded-b-lg mb-2"
                        }`}
                        onClick={() => toggleShowDetails()}
                    >
                        <div className="flex font-bold gap-2 justify-center">
                            <div>Details</div>
                            {showDetails ? (
                            <BsChevronUp className="text-xl font-bold" />
                            ) : (
                            <BsChevronDown className="text-xl font-bold" />
                            )}
                        </div>
                    </button>
                    {/* preview */}
                    <WorkPreview work={work} setIframeUrl={setIframeUrl} toggleModal={toggleModal}/>
                </div>
                {showDetails && (
                    <div className="w-full reactMarkDown p-2 rounded-tr-lg rounded-b-lg bg-gray-200">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {work.details}
                    </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default WorkItem