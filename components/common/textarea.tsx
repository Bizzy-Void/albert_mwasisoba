interface textareaProps {
    value: string;
    classes: string;
    placeholder: string;
    rows: number;
    onDataChange: (e) => void;
}

export default function TextArea({
    value,
    classes,
    placeholder,
    rows,
    onDataChange,
}:textareaProps) {
    return (
        <textarea
            className={`w-full pt-2 px-4 border-2 bg-transparent my-2 border-x-0 border-t-0 outline-none ${classes}`}
            value={value}
            placeholder={placeholder}
            rows={rows}
            onChange={(e) => onDataChange(e)}
        ></textarea>
    )
}