export default function Input({
    value,
    type,
    classes,
    placeholder,
    onDataChange
}) {
    return (
        <input
            type={type}
            className={"w-full pt-2 px-4 my-2 bg-transparent outline none" + classes}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onDataChange(e)}
        />
    )
}