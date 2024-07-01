import { AiOutlineEye } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const WorkPreview = ({work, setIframeUrl, toggleModal}) => {
    return ( 
        <>
            <div className="flex pb-2 justify-start gap-2">
                {work.url !== null && (
                    <>
                        <div className="group/btn relative">
                            <button
                                onClick={() => {
                                    setIframeUrl(work.url);
                                    toggleModal();
                                }}
                                className="rounded-lg group bg-gray-200 p-2 cursor-pointer duration-200 hover:bg-white"
                            >
                                <AiOutlineEye className="text-gray-700 group-hover/btn:text-red-500 text-2xl  duration-200"/>
                            </button>
                            <span className="pointer-events-none z-20 text-gray-700 text-xs bg-gray-300 p-1 rounded absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                                Preview work
                            </span>
                        </div>
                        <div className="group/btn relative">
                            <a href={work.url} target={"_blank"} rel={"noreferrer"}>
                                <button className="rounded-lg group bg-gray-200 p-2 cursor-pointer duration-200 hover:bg-white">
                                    <FiArrowUpRight className="text-gray-700 text-2xl group-hover/btn:text-red-500 duration-200" />
                                </button>
                            </a>
                            <span className="pointer-events-none z-20 text-gray-700 text-xs bg-gray-300 p-1 rounded absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                            Open
                            </span>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
 
export default WorkPreview;