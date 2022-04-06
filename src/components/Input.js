const Input = ({children,label,...rest}) => {
  
    return (
        <div>
            <label> {label} </label>
            <input {...rest}/>
            {children}
        </div>
    )
}
export default Input;