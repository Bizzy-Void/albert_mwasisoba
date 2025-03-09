import { FiX } from "react-icons/fi"

function Modal({ children, toggleModal, className }) {
    return (
        <div>
            <div className="flex justify-center items-center backdrop-blur bg-gray-200 bg-opacity-25 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto">
                    <div className="border border-gray-700 rounded-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <button>
                            <FiX
                                className="absolute top-0 right-0 z-20 border-gray-700 border-2 bg-white hover:bg-gray-700 duration-200 hover:text-white cursor-pointer rounded-xl"
                                onClick={toggleModal}
                            />
                        </button>

                        <div
                            className={`relative w-full overflow-hidden flex-auto" ${className}`}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
