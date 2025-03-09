interface inputProps {
    value: string
    type: string
    classes: string
    placeholder: string
    onDataChange: (e) => void
}

export default function Input({
    value,
    type,
    classes,
    placeholder,
    onDataChange,
}: inputProps) {
    return (
        <input
            type={type}
            className={`w-full pt-2 bg-transparent  px-4 border-2 my-2 border-x-0 border-t-0 outline-none ${classes}`}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onDataChange(e)}
        />
    )
}
