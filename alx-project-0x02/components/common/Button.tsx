interface ButtonProps {
    label: string;
    onClick?: () => void;
    className: string;
}

export default function Button ({label, onClick, className}: ButtonProps) {
    return(
        <button className={"p-4 py-2 bg-blue-600 text-white rounded ${className}"}
        onClick={onClick}
        >
        {label}
        </button>
    )
    
}