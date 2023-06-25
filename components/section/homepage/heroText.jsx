import TextSpan from './textspan'

export default function HeroTexts({onMouseEnter, onMouseLeave}) {
  const firstName = "Albert".split("");
  const lastName = "Mwasisoba".split("");

  return (
    <div className="font-neue text-center md:text-left z-30 select-none">
        <h1 className="text-4xl text-gray-500 pb-4">{"Hello, I'm"}</h1>
        {firstName.map((letter, index) => {
          return (
            <TextSpan key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {letter === " " ? "\n" : letter}
            </TextSpan>
          )
        })}
        <br/>
        {lastName.map((letter, index) => {
          return (
            <TextSpan key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {letter === " " ? "\n" : letter}
            </TextSpan>
          )
        })}
        <p className="md:text-xl text-white mb-20 pb-8 capitalize">
            <span className="font-bold">Software </span>
            <span className="font-bold">developer</span> &{" "}
            <span className="font-bold">Graphics designer.</span> 
        </p>
    </div>
  )
}