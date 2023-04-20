import Image from 'next/image'

function AlbertImage() {
  return (
    <div className='absolute md:relative opacity-0 md:mx-10  md:block md:opacity-100'>
        <aside>
        <Image
          src={"/images/albert.png"}
          alt="albert mwasisoba Background"
          height="500"
          width="500"
        />
      </aside>
    </div>
  )
}

export default AlbertImage