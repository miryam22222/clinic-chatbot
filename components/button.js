// Just a generic button

export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick}>
            Language
            {children}
        </button>
    )
}

