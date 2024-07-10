import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {

  const [celebrate, setCelebrate] = useState(false);

  const toggleCelebration = () => {
    setCelebrate(!celebrate);
  };
  
  useEffect(() => {
    if (celebrate) {
      const timeoutId = setTimeout(() => {
        if (celebrate) { // Check if celebration is still ongoing before ending
          setCelebrate(false);
        }
      }, 20000); // 20 seconds in milliseconds

      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout
    }
  }, [celebrate]);// Empty dependency array for effect to run only once

  return (
    <div className='w-full h-full flex justify-center items-end pb-4'>
        <div className="flex flex-col items-center gap-y-4">
            <h5 className='text-xl text-gray-500'>
                {celebrate? "Thank you!" : "It's my birthday"}
            </h5>
            <button 
                className='bg-description_bg py-3 px-4 rounded-full border border-white text-white'
                onClick={toggleCelebration}
            >
                { celebrate ? "End Celebration" : "Celebrate with Me 🎉"}
            </button>
        </div>

        {celebrate && <ReactConfetti
            wind={0.05}
            gravity={0.1}
            tweenDuration={1000}
        />}
    </div>
  );
};

export default Confetti;