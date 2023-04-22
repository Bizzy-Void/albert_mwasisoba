export default function TextArea({
    value,
    classes,
    placeholder,
    rows,
    onDataChange,
}) {
    return (
        <textarea
            className={
                "w-full pt-2 px-4 border-2 bg-transparent my-2 outline-none" + classes
            }
            value={value}
            placeholder={placeholder}
            rows={rows}
            onChange={(e) => onDataChange(e)}
        ></textarea>
    )
}