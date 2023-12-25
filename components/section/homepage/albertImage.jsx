import Image from 'next/image'

function AlbertImage() {
  return (
    <div className='absolute md:relative opacity-0 md:mx-10  md:block md:opacity-100 md:w-1/2'>
        <aside className='flex justify-center items-center'>
          <Image
            src={"/images/albert.png"}
            alt="albert mwasisoba Background"
            height="500"
            width="500"
            style={{width: "100%", height: "480px"}}
            className='object-contain'
          />
      </aside>
    </div>
  )
}

export default AlbertImage