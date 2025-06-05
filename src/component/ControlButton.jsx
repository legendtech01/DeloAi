

export default function ControlButton({ label, onClick, isPrimary }) {
    return(
        <button onClick={onClick} className={`flex flex-col items-center text-sm px-4 py-2 rounded-full transition
            ${isPrimary ? "text-white bg-[#0c172b] shadow-lg" : "text-[#0c172b] bg-white bg-opacity-40"}`}>
            <p>{label}</p>
        </button>
    )
}