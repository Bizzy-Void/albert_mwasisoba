import Image from 'next/image'

function AlbertImage() {
  return (
    <div className='absolute md:relative opacity-0 md:mx-10  md:block md:opacity-100'>
        <aside>
        <Image
          src={"/images/torch.png"}
          alt="albert mwasisoba Background"
          height="200"
          width="500"
          style={{width: "100%", height: "480px"}}
        />
      </aside>
    </div>
  )
}

export default AlbertImage