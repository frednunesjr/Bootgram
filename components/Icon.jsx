function Icon({name, className}){
    return (
        <i className={`bi bi-${name} ${className}`}></i>
    )
}

export default Icon;