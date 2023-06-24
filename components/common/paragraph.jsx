export default function Paragraph({text, className}) {
    return <p className={"text-xl py-4" + className}>{text}</p>
}