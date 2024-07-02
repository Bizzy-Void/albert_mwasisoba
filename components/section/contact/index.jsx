import { useState, useEffect } from 'react'

import Input from "@/components/common/input.tsx";
import TextArea from "@/components/common/textarea.tsx";
import data from "@/components/utils";
import { PopupButton } from "react-calendly";

function ContactPage() {
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [budget, setBudget] = useState("");
    const [project, setProject] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [showWidget, setShowWidget] = useState(false);

    function saySent() {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    }

    function clearFields() {
        setFull_name("");
        setEmail("");
        setBudget("");
        setPhone("");
        setProject("");
    }

    useEffect(() => {
        if (full_name === "" || email === "" || phone === "" || project === "") {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [full_name, email, phone, project]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            setSubmitting(true);

            let data = {
                full_name,
                email,
                phone,
                budget,
                project,
            };

            const stringifiedData = JSON.stringify(data);
            const response = fetch("api/contact", {
                methond: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: stringifiedData,
            })

            if (response.status === 200) {
                clearFields();
                saySent();
            }
        } catch (error) {
            
            console.error(error)
        } finally {
            setSubmitting(false);
        }
    };

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
                        <Input
                            type="text"
                            classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                            placeholder="Your full name"
                            value={full_name}
                            onDataChange={(e) => {
                            setFull_name(e.target.value);
                            }}
                        />
                        <Input
                            type="email"
                            classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                            placeholder="Your email address"
                            value={email}
                            onDataChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Input
                            type="tel"
                            classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                            placeholder="Your phone number"
                            value={phone}
                            onDataChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        />
                        <Input
                            type="text"
                            classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                            placeholder="Your budget (optional)"
                            value={budget}
                            onDataChange={(e) => {
                                setBudget(e.target.value);
                            }}
                        />
                        <TextArea
                            classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                            placeholder="Project description"
                            value={project}
                            onDataChange={(e) => {
                                setProject(e.target.value);
                            }}
                            rows={4}
                        />
                        <div className="flex justify-end">
                            <button
                                disabled={submitting || disabled}
                                onClick={(e) => {
                                handleSubmit(e);
                                }}
                                className={
                                submitted
                                    ? " hover:bg-green-500  border-green-500   hover:text-white text-green-500 "
                                    : " hover:bg-white  border-white   hover:text-gray-500 text-white " +
                                    " bg-transparent duration-200 cursor-pointer rounded-2xl border-2 disabled:bg-gray-500 px-4 py-2 disabled:border-gray-500 disabled:text-gray-700"
                                }
                            >
                                {submitting ? "Sending..." : submitted ? "Sent " : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage