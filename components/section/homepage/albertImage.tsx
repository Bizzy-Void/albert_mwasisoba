import Image from "next/image"

function AlbertImage() {
    return (
        <aside className="flex justify-center items-center">
            <Image
                src={"/images/albert.png"}
                alt="albert mwasisoba Background"
                height="500"
                width="500"
                style={{ width: "100%", height: "480px" }}
                className="object-contain"
            />
        </aside>
    )
}

export default AlbertImage
