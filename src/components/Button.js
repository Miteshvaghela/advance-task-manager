const Button = ({title, color, showAddForm}) => {
    return (
        <button style={{background:color}} className="btn" onClick={showAddForm} >{title}</button>
    )
}

export default Button;