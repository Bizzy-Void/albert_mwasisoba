export default function Paragraph({text, className}) {
    return <p className={`text-xl text-gray-400 py-4 ${className}`}>
        {text}
    </p>
}