const Hobbies = ({data}) => {
    const hobbies = data.aboutMe.hobbies;
    const formattedHobbies = hobbies.replaceAll(",", " | ");
    
    return (
        <>
            <div className='bg-description_bg py-10 px-10 rounded-2xl'>
                <div className='font-bold w-full text-4xl text-white'>Hobbies</div>
                <p className='text-md capitalize text-gray-500'>{formattedHobbies}</p>
            </div>
        </>
    );
}
 
export default Hobbies;