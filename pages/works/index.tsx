import React, { useState} from 'react'
import Layout from '@/components/Layout';

import data from "@/components/utils";
import WorkItemsLayout from "@/components/section/WorkItemsLayout";

// components
import Modal from "@/components/common/modal";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  // toggle modal
  const toggleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  }

  return (
    <>
        <Layout>
            {/* modal */}
            {isModalOpen === true ? (
              <Modal className={""} toggleModal={toggleModal}>
                <ModalContent url={iframeUrl}/>
              </Modal>
            ) : (
              ""
            )}

            <div className='px-4 md:px-10 lg:px-32'>
                <Heading text={"Works & Projects"} 
                  className={"md:text-center"}
                />
                <Paragraph 
                  text={"Here is a list of the projects and collaborations I have been involved in over the past few years."}
                  className={'md:text-center'}
                />
            </div>

            <WorkItemsLayout
                works = {data.works}
                setIframeUrl={(url) => setIframeUrl(url)}
                toggleModal={() => toggleModal()}
            />
        </Layout>
    </>
  )
}

export default Works;

function ModalContent({ url }) {
  return (
    <div className="modal-iframe-container">
      <div className="absolute bottom-0 rounded-bl-2xl rounded-tr-lg left-0 text-xs p-1 bg-red-50 text-red-500">
        <span>
          This is a static page.{" "}
          <a
            className="underline"
            target={"_blank"}
            rel={"noreferrer"}
            href={url}
          >
            {" "}
            Click here
          </a>{" "}
          to open the dynamic page.
        </span>
      </div>
      <iframe
        src={url}
        allow={`accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;`}
        className="modal-iframe rounded-2xl"
      ></iframe>
    </div>
  );
}