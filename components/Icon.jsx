export default function Icon({name, className, size}){
    return (
        <i className={`bi bi-${name} ${className} fs-${size}`}></i>
    )
}