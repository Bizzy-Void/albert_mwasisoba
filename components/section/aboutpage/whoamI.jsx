import React, { useState, useEffect } from 'react'
import data from '@/components/utils'
// import Paragraph from '@/components/common/paragraph'
import Image from 'next/image'
import Button from '@/components/common/button'
import { PopupButton } from "react-calendly";
import Hobbies from './hobbies';

function WhoAmI() {
  const [showWidget, setShowWidget] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowWidget(true);
    }, 300);
  }, []);

  return (
    <div className='flex flex-col gap-3' id="about-root">
      <div className='bg-description_bg py-10 px-10 rounded-2xl'>
        <div className='flex flex-row justify-between items-center'>
          <div className='font-bold w-full text-4xl text-white'>Who am I?</div>
          <Image 
            src={"/images/bizzy.jpg"}
            alt="albert mwasisoba Background"
            height="200"
            width="500"
            className='w-14 h-14 rounded-full border-2 border-gray-700'
          />
        </div>
        {/* <Paragraph text={data.aboutMe.bio} className="text-white mb-4"/> */}
        <div className='text-xl py-4 text-gray-300'>{"I'm Albert Mwasisoba"}</div>
        <p className='text-md pb-3 text-gray-500'>{data.aboutMe.bio}</p>
        {showWidget && (
          <PopupButton
            url="https://calendly.com/albertmwasisoba/lets-talk"
            rootElement={document.getElementById("about-root")}
            text="Schedule an appointment"
            className=" bg-gray-600 py-3 md:my-2 mr-4 px-4 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-700"
          />
        )}
        <Button
          a={true}
          title={"Résumé"}
          link={
            "https://docs.google.com/document/d/1Z6RHjKaPnRskMuFf-ZLIPf5EGBLKoAtm_QhwwWQOVaU/edit?usp=sharing"
          }
        />
      </div>

      <Hobbies data ={data} />
    </div>
  )
}

export default WhoAmI