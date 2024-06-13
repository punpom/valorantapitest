import './Error.css'

interface ErrorPageProps {
    message: string
}

const Error: React.FC<ErrorPageProps> = ({ message }) => {
    return (
        <div className="error_container">
            <h1>{message}</h1>
        </div>
    )
}

export default Error
