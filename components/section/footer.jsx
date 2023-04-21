function Footer({data}) {
  return (
    <footer className='w-full fixed z-50 bottom-0 left-0 px-4 md:px-10 lg:px-32 py-2 text-gray-500 bg-white md:flex justify-between'>
        {/* email to albert link */}
        <div className="flex justify-center gap-4">
            <a
                target={"_blank"}
                rel="noreferrer"
                href={"Mail to: " + data.email}
                className="hover:underline"
            >
                {data.email}
            </a>
        </div>

        {/* social media links */}
        <div className="flex justify-center gap-4">
            {data.medias.map((media, index) => (
                <a
                    key={index}
                    target={"_blank"}
                    rel="noreferrer"
                    href={media.link}
                    className="hover:underline"
                >
                    {media.title}
                </a>
            ))}
            <a href={"tel:+255757343945"} className="hover:underline">
                Phone
            </a>
        </div>
    </footer>
  )
}

export default Footer