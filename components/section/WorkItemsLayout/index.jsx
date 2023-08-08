import { useWindowSize } from "hooks/useWindowSize";
import WorkItem from "../workitem";

const WorkItemsLayout = ({works}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const width = useWindowSize().width;

    return(
        <div className='flex px-4 md:px-10 lg:px-32 flex-row gap-4 my-10'>
            {width < 768 && (
                <div className="flex flex-col gap-4 w-full">
                {works.map((work, index) => (
                    <div className="w-full" key={index}>
                    <WorkItem
                        work={work}
                    />
                    </div>
                ))}
                </div>
            )}
            {width >= 768 && width < 1024 && (
                <>
                {[0, 1].map((start, index) => (
                    <div
                    key={index}
                    style={{ width: "calc(50% - 8px)" }}
                    className="flex flex-col gap-4"
                    >
                    {works.map(
                        (work, index) =>
                        start === index % 2 && (
                            <div className="w-full" key={index}>
                            <WorkItem
                                work={work}
                            />
                            </div>
                        )
                    )}
                    </div>
                ))}
                </>
            )}
            {width >= 1024 && width < 1280 && (
                <>
                {[0, 1, 2].map((start, index) => (
                    <div
                    key={index}
                    style={{ width: "calc(33.33333% - 10.5px)" }}
                    className="flex flex-col gap-4"
                    >
                    {works.map(
                        (work, index) =>
                        start === index % 3 && (
                            <div className="w-full" key={index}>
                            <WorkItem
                                work={work}
                            />
                            </div>
                        )
                    )}
                    </div>
                ))}
                </>
            )}
            {width >= 1280 && (
                <>
                {[0, 1, 2, 3].map((start, index) => (
                    <div
                    key={index}
                    style={{ width: "calc(25% - 12px)" }}
                    className="flex flex-col gap-4 "
                    >
                    {works.map(
                        (work, index) =>
                        start === index % 4 && (
                            <div className="w-full" key={index}>
                            <WorkItem
                                work={work}
                                setIframeUrl={(url) => setIframeUrl(url)}
                                toggelModal={() => toggelModal()}
                            />
                            </div>
                        )
                    )}
                    </div>
                ))}
                </>
            )}
        </div>
    );
}

export default WorkItemsLayout;