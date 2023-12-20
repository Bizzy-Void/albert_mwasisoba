import TextSpan from './textspan'

export default function HeroTexts({ onMouseEnter, onMouseLeave, isHoliday, holidayColor }) {
  const firstName = "Albert".split("");
  const lastName = "Mwasisoba".split("");

  const firstText = isHoliday ? "Happy".split("") : "Albert".split("");
  const lastText = isHoliday ? "Holidays".split("") : "Mwasisoba".split("");
  const colorClass = isHoliday ? holidayColor : "text-gray-500";

  return (
    <div className={`font-neue text-center md:text-left z-30 select-none ${colorClass}`}>
        <h1 className="text-4xl text-gray-500 pb-4">{ isHoliday ? "I wish you" : "Hello, I'm" }</h1>
        {firstText.map((letter, index) => {
          return (
            <TextSpan key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {letter === " " ? "\n" : letter}
            </TextSpan>
          )
        })}
        <br/>
        {lastText.map((letter, index) => {
          return (
            <TextSpan key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {letter === " " ? "\n" : letter}
            </TextSpan>
          )
        })}
        <p className="md:text-xl text-white mb-20 pb-8 capitalize">
            { isHoliday ? (
              <>
                <span className="font-bold">To you </span>
                <span className="font-bold">and </span>
                <span className="font-bold">your family </span>
              </>
            ) : (
              <>
                <span className="font-bold">Software </span>
                <span className="font-bold">developer</span> &{" "}
                <span className="font-bold">Graphics designer.</span>
              </>
            )} 
        </p>
    </div>
  )
}