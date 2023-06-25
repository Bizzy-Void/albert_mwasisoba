export default function Heading({text, className}) {
    return (
        <h2 className={"font-bold w-full pt-8 text-4xl text-white" + className}>{text}</h2>
    )
}